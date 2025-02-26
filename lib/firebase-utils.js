import { db, storage } from "../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export const uploadFile = async (file, path, userId) => {
  if (!file || !userId) return;

  const storageRef = ref(storage, `${userId}/${path}/${file.name}`);

  try {
    // Upload the file to Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // You can track progress here if needed
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Upload failed:", error);
          reject(error);
        },
        async () => {
          // Get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Add a document in Firestore to track the file
          const docRef = await addDoc(collection(db, "files"), {
            userId: userId,
            filename: file.name,
            fullPath: `${userId}/${path}/${file.name}`,
            downloadURL,
            path: path === "" ? "root" : path,
            type: file.type,
            size: file.size,
            timestamp: serverTimestamp(),
          });

          resolve({
            docId: docRef.id,
            downloadURL,
            fullPath: `${userId}/${path}/${file.name}`,
            filename: file.name,
          });
        }
      );
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const getUserFiles = async (userId, path = "root") => {
  if (!userId) return [];

  const q = query(
    collection(db, "files"),
    where("userId", "==", userId),
    where("path", "==", path)
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const deleteFile = async (fileId, fullPath) => {
  if (!fileId || !fullPath) return;

  try {
    // Delete from storage
    const storageRef = ref(storage, fullPath);
    await deleteObject(storageRef);

    // Delete from Firestore
    await deleteDoc(doc(db, "files", fileId));

    return { success: true };
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
};
