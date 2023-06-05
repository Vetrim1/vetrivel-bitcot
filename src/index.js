import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";
import "./styles.css";
import Routing from "./Routing";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Routing />
  </StrictMode>
);
