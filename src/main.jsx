import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext.jsx";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<QueryClientProvider  client={queryClient}>
    <AuthContextProvider>
    <BrowserRouter>
      <App />
      <ToastContainer/>
    </BrowserRouter>
    </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
