import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '@/layout';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import '@/styles/global.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
