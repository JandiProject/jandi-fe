import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/common";
import {
  MyGardenPage,
  WidgetPage,
  SettingsPage,
  AccountPage,
  LoginPage,
  SignupPage,
  AddPlatformPage,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MyGardenPage /> },
      { path: "widget", element: <WidgetPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "platform/add", element: <AddPlatformPage /> },
    ],
  },
]);
