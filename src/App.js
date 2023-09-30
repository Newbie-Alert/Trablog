import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPage from './Page/RootPage/RootPage';
import ErrorPage from './Page/ErrorPage/ErrorPage';
import MainPage from './Page/MainPage/MainPage';
import PostPage from './Page/PostPage/PostPage';
import DetailPage from './Page/DetailPage/DetailPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/myPosts/:id', element: <PostPage /> },
      { path: '/myPosts/:id/:postId', element: <DetailPage /> },

    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>
      <MainPage />
    </RouterProvider>
  );
}

export default App;
