import React from "react";
import ReactDOMClient from "react-dom/client";
import { DesktopListing } from "./screens/DesktopListing";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DesktopListing />);
