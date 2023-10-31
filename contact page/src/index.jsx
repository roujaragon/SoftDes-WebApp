import React from "react";
import ReactDOMClient from "react-dom/client";
import { DesktopContact } from "./screens/DesktopContact";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DesktopContact />);
