# 🚗 VIN Decoder

**[🌐 View deployed application (Live Demo) ](https://decode-vin.netlify.app)**.

This project is a modern web application designed to quickly and conveniently decode vehicle VIN codes using the open API provided by the National Highway Traffic Safety Administration (NHTSA).

## ✨ Features

- **VIN Decoding:** Fast parsing of vehicle data (make, model, year, body class, engine specifications, assembly plant, etc.) and displaying it in a responsive table. Only populated values are filtered and displayed.
- **Request History:** Automatic saving of the 3 most recently successfully decoded VINs in `localStorage`. Clicking an item from the history instantly populates the input field and triggers a new request.
- **Clipboard Integration:** A convenient button to quickly paste a copied VIN directly into the form.
- **Variables Dictionary (Vehicle Variables):** A dedicated page featuring a list of all possible vehicle characteristics.
- **Detailed Variable Page:** Dynamic routes (`/variables/:id`) that provide a detailed description of a specific variable. Data is passed via Router State for instant rendering and also supports direct link navigation.
- **SEO and Meta Tags:** Dynamic updates of `<title>` and `<meta>` tags for each page using `react-helmet-async`.
- **Responsive Design:** The interface is perfectly adapted for both desktop and mobile devices.

## ⚛️ Tech Stack

- **Core:** React 19, TypeScript, Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS + SCSS Modules (BEM methodology)
- **State Management:** React Context API + Custom Hooks
- **Data Fetching:** Axios, Fetch API
- **Icons:** Lucide React

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

---

## 🚀 Local Setup Instructions

To run the project on your local machine, follow these steps:

### 1. Clone the repository. Run:

```bash
git clone https://github.com/YegorMurunov/vin-decoder.git
```

### 2. Navigate to the project directory. Make sure [git](https://git-scm.com/) is installed and run:

```bash
cd your-repo
```

### 3. Install dependencies. Make sure [Node.js](https://nodejs.org/) is installed and run:

**npm**

```bash
npm install
```

**yarn**

```bash
yarn install
```

### 4. Start the development server:

**npm**

```bash
npm run dev
```

**yarn**

```bash
yarn dev
```

### 5. Open in browser

After running the command, a local address will appear in the terminal. Usually, it is:

```bash
http://localhost:5173/
```

Open this link in your browser to use the application.
