import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import ErrorPage from "./error-page";
import Main from "./routes/Main";
import Users from "./routes/Users";
import Tasks from "./routes/Tasks";
import store from "./state/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);

function App() {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
