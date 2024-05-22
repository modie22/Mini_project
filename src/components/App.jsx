import Dashboard from "pages/Dashboard/Dashboard";
import Lectures from "pages/Lectures/Lectures";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Progress from "pages/Progress/Progress";

export const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="lectures" element={<Lectures />} />
      <Route path="progress" element={<Progress />}>
      </Route>
      <Route path="*" element={<div>Page not found</div>} />
    </Route>
  </Routes>
  );
};
