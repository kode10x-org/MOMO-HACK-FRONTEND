import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Index from "./routes/AllRoutes.tsx";
import GlobalStyle from "./assets/GlobalStyles.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyle />
		<ToastContainer />
		<RouterProvider router={Index} />
	</React.StrictMode>,
);
