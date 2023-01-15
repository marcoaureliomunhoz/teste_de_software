import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DetailsPage from './pages/Details';
import HomePage from './pages/Home';

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: '/details',
      element: <DetailsPage />,
    },
    {
      path: '/',
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
