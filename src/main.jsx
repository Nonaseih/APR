/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 13/11/2025 - 11:08:27
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
