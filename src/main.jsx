import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client'

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Amityadav-Portfolio">
    <App />
  </BrowserRouter>
);
