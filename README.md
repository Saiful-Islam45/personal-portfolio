# Md Saiful Islam's Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

This repository contains the source code for my personal portfolio website, showcasing my skills, projects, experience, and education. It's built with Next.js and TypeScript, designed to provide a comprehensive overview of my professional profile.

## About The Project

This portfolio serves as a central hub for recruiters and interested individuals to learn more about my work, technical abilities, and professional journey. It aims to present information in a clear, concise, and visually appealing manner.

**Live Demo:** [personal-portfolio-olive-three-30.vercel.app](https://personal-portfolio-olive-three-30.vercel.app/)

**Source Code:** [github.com/Saiful-Islam45/personal-portfolio](https://github.com/Saiful-Islam45/personal-portfolio)



### Built With

This project is built with the following primary technologies:

*   Next.js
*   React
*   TypeScript
*   Tailwind CSS
*   EmailJS
*   Framer Motion

## Features

The portfolio includes the following sections, reflecting the main components of the application:

*   **Hero Section**: A captivating introduction.
*   **About Me**: Detailed information about my background and passion.
*   **Skills**: A showcase of my technical proficiencies.
*   **Projects**: A collection of my notable works with descriptions and links.
*   **Experience**: My professional work history.
*   **Education**: My academic qualifications.
*   **Blog**: (If applicable) My thoughts and articles.
*   **Contact**: A way to get in touch.
*   **Footer**: Consistent navigation and copyright information.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed on your system:

*   Node.js (LTS version recommended - e.g., v18.x or v20.x)
   
*   A package manager: npm

You can check your Node.js version by running:
```bash
node -v
```

### Installation

1.  **Clone the repository:**
    
    ```bash
    git clone https://github.com/Saiful-Islam45/personal-portfolio.git
    ```
2.  **Enter into the project directory:**
    ```bash
    cd personal-portfolio
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

### Environment Variables

1.  Create a `.env` file in the root of your project:
    ```bash
    touch .env
    ```

2.  Add your environment variables to this file. For example, if you're using EmailJS:
    ```properties
    NEXT_PUBLIC_EMAILJS_SERVICE_ID="YOUR_SERVICE_ID"
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="YOUR_TEMPLATE_ID"
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="YOUR_PUBLIC_KEY"
    ```
    **Note:** You have all environment variables in the `.env.sample` file.

### Running the Development Server

Once the installation is complete (and environment variables are set), you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
