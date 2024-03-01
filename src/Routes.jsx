import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Galileodesign from "pages/Galileodesign";
import DocumentForm from "pages/DocumentForm";
import ChatBot from "pages/ChatBot";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Galileodesign /> },
    { path: "/document-form", element: <DocumentForm /> },
    { path: "/chatbot", element: <ChatBot /> },
    { path: "*", element: <NotFound /> },
    {
      path: "galileodesign",
      element: <></>,
    },
  ]);

  return element;
};

export default ProjectRoutes;
