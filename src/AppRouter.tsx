import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <div>Home</div>
            </Layout>
        )
    },
    {
        path: "/about",
        element: <div>About</div>
    }
]);

function AppRouter() {
    return <RouterProvider router={router} />;
}

export default AppRouter;
