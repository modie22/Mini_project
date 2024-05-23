import Dashboard from 'pages/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy } from 'react';
import { LoginPage } from './loginPage/LoginPage';

const Lectures = lazy(() => import('pages/Lectures/Lectures'));
const Progress = lazy(() => import('pages/Progress/Progress'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="lectures" element={<Lectures />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registr" element={<Progress />}></Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  );
};
