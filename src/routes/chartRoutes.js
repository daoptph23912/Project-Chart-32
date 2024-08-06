import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/page404/notFound";
import { DashBoard } from "../pages/dashboard/dashboard";
import { Login } from "../pages/login/login";
const ChatRoutes = () => {
  return (
    <Routes>
      <Route path="/chart" element={<DashBoard />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};
export default ChatRoutes;
