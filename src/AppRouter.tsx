import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Rut from "./pages/rut";
import NewsArchive from "./pages/news-archive";
import EnvironmentCertification from "./pages/environment-certification";
import Contact from "./pages/contact";
import GardeningServices from "./pages/gardening-services";
import ForestServices from "./pages/ForestServices";
import NatureConservation from "./pages/nature-conservation";
import SnowAndIce from "./pages/snow-and-ice";

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
        path: "/gardening-services",
        element: (
            <Layout>
                <GardeningServices />
            </Layout>
        )
    },
    {
        path: "/forest-services",
        element: (
            <Layout>
                <ForestServices />
            </Layout>
        )
    },
    {
        path: "/nature-conservation",
        element: (
            <Layout>
                <NatureConservation />
            </Layout>
        )
    },
    {
        path: "/snow-and-ice",
        element: (
            <Layout>
                <SnowAndIce />
            </Layout>
        )
    },
    {
        path: "/rut",
        element: (
            <Layout>
                <Rut />
            </Layout>
        )
    },
    {
        path: "/news-archive",
        element: (
            <Layout>
                <NewsArchive />
            </Layout>
        )
    },
    {
        path: "/environment-certification",
        element: (
            <Layout>
                <EnvironmentCertification />
            </Layout>
        )
    },
    {
        path: "/about",
        element: (
            <Layout>
                <About />
            </Layout>
        )
    },
    {
        path: "/contact",
        element: (
            <Layout>
                <Contact />
            </Layout>
        )
    }
]);

function AppRouter() {
    return <RouterProvider router={router} />;
}

export default AppRouter;
