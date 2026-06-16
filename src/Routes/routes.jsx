import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import ContactMe from "../Pages/ContactMe/ContactMe";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import ReactProjects from "../Pages/Projects/ReactProjects";
import HtmlCssProjects from "../Pages/Projects/HtmlCssProjects";
import JavaScriptProjects from "../Pages/Projects/JavaScriptProjects";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/about",
                Component: AboutMe
            },
            {
                path: "/skills",
                Component: Skills
            },
            {
                path: "/projects",
                Component: Projects
            },
            {
                path: "/projects/react",
                Component: ReactProjects
            },
            {
                path: "/projects/html-css",
                Component: HtmlCssProjects
            },
            {
                path: "/projects/javascript",
                Component: JavaScriptProjects
            },
            {
                path: "/contact",
                Component: ContactMe
            },
            {
                path: "/projectDetails/:id",
                Component: ProjectDetails
            },
        ]
    },
]);

export default router;