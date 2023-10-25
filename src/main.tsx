import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Index from "./routes/AllRoutes.tsx";
import GlobalStyle from "./assets/GlobalStyles.tsx";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
    <GlobalStyle  />
		<RouterProvider router={Index} />
	</React.StrictMode>,
);
