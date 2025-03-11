#!/bin/bash

# Navigate to the src folder
cd src

# Create main folders
mkdir assets components pages layouts context hooks services styles

# Create key files
touch App.jsx main.jsx index.css

# Create example components
echo "export default function Navbar() { return <nav>Navbar</nav>; }" > components/Navbar.jsx
echo "export default function Footer() { return <footer>Footer</footer>; }" > components/Footer.jsx

# Create example pages
echo "export default function Home() { return <div>Home Page</div>; }" > pages/Home.jsx
echo "export default function Login() { return <div>Login Page</div>; }" > pages/Login.jsx

# Create basic layout files
echo "export default function Layout() { return <div>Layout</div>; }" > layouts/Layout.jsx

# Create a simple API service file
echo "import axios from 'axios';\nexport const api = axios.create({ baseURL: 'http://localhost:5000/api' });" > services/api.js

# Print completion message
echo "✅ Project structure created successfully!"

# Navigate back to root
cd ..

