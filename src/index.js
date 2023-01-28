import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import UserSelect from "./contexts/UserSelect";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserSelect>
      <App />
    </UserSelect>
  </React.StrictMode>
);
