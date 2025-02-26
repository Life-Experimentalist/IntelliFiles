# 💻 Dropbox Clone

[![Discord](https://img.shields.io/discord/1056947417842454678?label=DISCORD%20SERVER&logo=discord&style=for-the-badge)](https://discord.gg/FVaPTTs7MY)
![Language count](https://img.shields.io/github/languages/count/LitoHDD/Dropbox-Clone?label=%F0%9F%8C%8E%20LANGUAGES&style=for-the-badge)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/LitoHDD/Dropbox-Clone?color=orange&label=%F0%9F%93%A2%20LAST%20VERSION&style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/LitoHDD/Dropbox-Clone?style=for-the-badge)

## 📝 Description

Dropbox Clone is a cloud storage platform designed to provide users with a convenient and secure way to store and access their files from anywhere. With features inspired by Dropbox, our platform offers seamless file synchronization, sharing, and collaboration functionalities.

## 🎯 Project Objectives

The main objectives of Dropbox Clone are:

- To offer users a reliable and intuitive cloud storage solution for managing their files and documents.
- To provide seamless file synchronization across devices, ensuring users have access to their files anytime, anywhere.
- To facilitate easy sharing and collaboration on documents and folders among users and teams.

## 🔧 Technologies Used

![HTML](https://img.shields.io/badge/HTML-%23e34c26.svg?logo=html5&logoColor=white&style=for-the-badge)
![CSS](https://img.shields.io/badge/CSS-%23563d7c.svg?logo=css3&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-%233178c6.svg?logo=typescript&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/React-%2361DAFB.svg?logo=react&logoColor=white&style=for-the-badge)
![Shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-white?style=for-the-badge&logo=shadcnui&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-%234B2D77.svg?logo=clerk&logoColor=white&style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-%23FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black)

## 🤝 Contributors

[![GitHub contributors](https://img.shields.io/github/contributors/LitoHDD/Dropbox-Clone?style=for-the-badge)](https://github.com/LitoHDD/Dropbox-Clone/graphs/contributors)  
[![Contributors](https://contrib.rocks/image?repo=LitoHDD/Dropbox-Clone)](https://github.com/LitoHDD/Dropbox-Clone/graphs/contributors)

## 📄 License

This project is under the MIT License. For more information, please refer to the LICENSE file.

## 🚀 Let's Get Started

To start using Dropbox Clone, visit our GitHub repository and follow the instructions in the README.md file. You can also join our Discord server for discussions, support, and collaboration opportunities.

## 📝 Additional Notes

For more detailed information about Dropbox Clone and its features, please refer to the README.md file located at the root of the repository. Join our Discord server to engage with other developers and contributors.



------------------------


Sure, I'll guide you through the steps to set up and run this project. Here are the steps you need to follow:

1. **Install Node.js and npm**:
   - Make sure you have Node.js and npm installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org/).

2. **Clone the Repository**:
   - Clone the project repository to your local machine using Git. Open a terminal and run:
     ```sh
     git clone <repository-url>
     ```
   - Navigate to the project directory:
     ```sh
     cd Dropbox-Clone-1.2.2
     ```

3. **Install Dependencies**:
   - Install the project dependencies using npm. Run the following command in the terminal:
     ```sh
     npm install
     ```

4. **Set Up Environment Variables**:
   - Create a `.env.local` file in the root of the project directory. You can copy the contents of `.env.example` to this new file and fill in the required values:
     ```sh
     cp .env.example .env.local
     ```
   - Open `.env.local` and replace the placeholder values with your actual keys and IDs for Clerk and Firebase.

5. **Run the Development Server**:
   - Start the development server by running:
     ```sh
     npm run dev
     ```
   - Open your browser and navigate to `http://localhost:3000` to see the application running.

6. **Firebase Setup**:
   - Ensure you have a Firebase project set up. You need to configure Firestore and Firebase Storage in your Firebase console.
   - Update the Firebase configuration in the `.env.local` file with your Firebase project details.

7. **Clerk Setup**:
   - Ensure you have a Clerk account and have set up an application in the Clerk dashboard.
   - Update the Clerk configuration in the `.env.local` file with your Clerk publishable key and secret key.

8. **Tailwind CSS**:
   - The project uses Tailwind CSS for styling. The configuration is already set up in `tailwind.config.ts` and `postcss.config.js`. You don't need to do anything extra for this.

9. **TypeScript**:
   - The project is written in TypeScript. The configuration is already set up in `tsconfig.json`. You don't need to do anything extra for this.

10. **Linting**:
    - The project uses ESLint for linting. You can run the linter using:
      ```sh
      npm run lint
      ```

By following these steps, you should be able to set up and run the project locally. If you encounter any issues, feel free to ask for further assistance.
