// Import React library (needed to use JSX)
import React from "react";

// Import ReactDOM to render the React app into the browser
import ReactDOM from "react-dom/client";

// Import the main App component
import App from "./App";

// Import global CSS styles (Tailwind + custom styles)
import "./index.css";

// Create a root element in the HTML DOM
// This targets the <div id="root"></div> in index.html
ReactDOM.createRoot(document.getElementById("root")).render(

  // React.StrictMode helps detect potential problems in development
  // It does not affect production build
  <React.StrictMode>

    {/* Render the main App component */}
    <App />

  </React.StrictMode>
);