import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/page404/notFound";
import { DashBoard } from "../pages/dashboard/dashboard";
import { MainLayout } from "../layouts/mainLayout";
const ChatRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashBoard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default ChatRoutes;
