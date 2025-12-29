import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Home from "./pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        )
    },
    {
        path: "/services",
        element: (
            <Layout>
                <div>Tjänster</div>
            </Layout>
        )
    },
    {
        path: "/rut",
        element: (
            <Layout>
                <div>RUT</div>
            </Layout>
        )
    },
    {
        path: "/news-archive",
        element: (
            <Layout>
                <div>Nyheter och Arkiv</div>
            </Layout>
        )
    },
    {
        path: "/environment-certification",
        element: (
            <Layout>
                <div>Miljö och Certifiering</div>
            </Layout>
        )
    },
    {
        path: "/about",
        element: (
            <Layout>
                <div>About</div>
            </Layout>
        )
    },
    {
        path: "/contact",
        element: (
            <Layout>
                <div>Kontakt</div>
            </Layout>
        )
    }
]);

function AppRouter() {
    return <RouterProvider router={router} />;
}

export default AppRouter;
