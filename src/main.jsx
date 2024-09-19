import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Watch from "./pages/Watch.jsx";
import SearchResult from "./pages/SearchResult.jsx";
import TextProvider from "./context/TextContext.jsx";
import Channel from "./pages/Channel.jsx";
import { CameraEnhanceOutlined } from "@mui/icons-material";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="search" element={<SearchResult />} />
      <Route path="watch/:id" element={<Watch />} />
      <Route path="channel/:id" element={<Channel />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TextProvider>
      <RouterProvider router={router} />
    </TextProvider>
  </StrictMode>
);


