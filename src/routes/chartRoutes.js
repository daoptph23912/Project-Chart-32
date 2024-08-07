import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/page404/notFound";
import { DashBoard } from "../pages/dashboard/dashboard";
import { Login } from "../pages/login/login";
import { MainLayout } from "../layouts/mainLayout";
const ChatRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default ChatRoutes;
