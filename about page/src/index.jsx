import React from "react";
import ReactDOMClient from "react-dom/client";
import { DesktopAbout } from "./screens/DesktopAbout";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DesktopAbout />);
