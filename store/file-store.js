import { create } from "zustand";
import { uploadFile, getUserFiles, deleteFile } from "../lib/firebase-utils";

const useFileStore = create((set, get) => ({
  files: [],
  isLoading: false,
  currentPath: "root",

  setCurrentPath: (path) => set({ currentPath: path }),

  fetchFiles: async (userId) => {
    set({ isLoading: true });
    try {
      const path = get().currentPath;
      const files = await getUserFiles(userId, path);
      set({ files, isLoading: false });
    } catch (error) {
      console.error("Error fetching files:", error);
      set({ isLoading: false });
    }
  },

  uploadFiles: async (files, userId) => {
    set({ isLoading: true });
    try {
      const path = get().currentPath === "root" ? "" : get().currentPath;
      const uploadPromises = Array.from(files).map((file) =>
        uploadFile(file, path, userId)
      );

      await Promise.all(uploadPromises);

      // Refresh the files list
      await get().fetchFiles(userId);
    } catch (error) {
      console.error("Error uploading files:", error);
      set({ isLoading: false });
    }
  },

  deleteFiles: async (selectedFiles) => {
    set({ isLoading: true });
    try {
      const deletePromises = selectedFiles.map((file) =>
        deleteFile(file.id, file.fullPath)
      );

      await Promise.all(deletePromises);

      // Update the files list by removing deleted files
      const updatedFiles = get().files.filter(
        (file) => !selectedFiles.some((selected) => selected.id === file.id)
      );

      set({ files: updatedFiles, isLoading: false });
    } catch (error) {
      console.error("Error deleting files:", error);
      set({ isLoading: false });
    }
  },
}));

export default useFileStore;
