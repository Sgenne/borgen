import { Link, NavLink } from "react-router";
import AppButton from "./components/AppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
import { faTree } from "@fortawesome/free-solid-svg-icons/faTree";

type Props = {
    children: React.ReactNode;
};

const links = [
    { to: "/", text: "Start" },
    { to: "/services", text: "Tjänster" },
    { to: "/about", text: "RUT avdrag" },
    { to: "/news-archive", text: "Nyheter & arkiv" },
    { to: "/environment-certification", text: "Miljö & Certifiering" },
    { to: "/about", text: "Om oss" },
    { to: "/contact", text: "Kontakt" }
];

function Layout(props: Props) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const navBarLinks = links.map((link) => (
        <li key={link.to}>
            <NavLink
                to={link.to}
                className={({ isActive }) =>
                    `me-4 whitespace-nowrap ${isActive ? "text-gray-600" : "text-gray-800 hover:underline"}`
                }
            >
                {link.text}
            </NavLink>
        </li>
    ));

    const sideBarLinks = links.map((link) => (
        <li key={link.to}>
            <Link to={link.to} className="text-3xl font-medium me-4 whitespace-nowrap text-white hover:underline">
                {link.text}
            </Link>
        </li>
    ));

    console.log("isSideBarOpen", isSideBarOpen);

    return (
        <div className="min-h-screen">
            <nav className="grid grid-cols-10 h-[95px] border-b border-neutral-100 shadow-md relative items-center px-4">
                <Link to="/">
                    <h1 className="text-4xl lg:text-3xl font-bold whitespace-nowrap">
                        <FontAwesomeIcon icon={faTree} className="me-1" />
                        Borgen
                    </h1>
                </Link>
                <ul className="hidden lg:flex col-span-9 xl:col-span-8 justify-center gap-x-6">{navBarLinks}</ul>
                <div className="lg:hidden col-span-9 flex justify-end">
                    <AppButton className="text-3xl" onClick={() => setIsSideBarOpen(true)}>
                        <FontAwesomeIcon icon={faBars} />
                    </AppButton>
                </div>
            </nav>
            <main className="h-[calc(100vh-95px)]">
                <div className="min-h-full bg-[#fcfcfc] p-4">{props.children}</div>
                <div
                    className={`fixed top-0 end-0 h-full w-full bg-[#111111] text-white p-4 transition-all duration-100 ${
                        isSideBarOpen ? "translate-x-0 lg:translate-x-full" : "translate-x-full"
                    }`}
                >
                    <div className="flex justify-between ">
                        <Link to="/" className="text-4xl font-bold whitespace-nowrap">
                            <FontAwesomeIcon icon={faTree} className="me-1" />
                            Borgen
                        </Link>
                        <AppButton
                            className="mb-8 text-white flex items-end justify-center"
                            onClick={() => setIsSideBarOpen(false)}
                        >
                            <span className="text-3xl">&times;</span>
                            <span className="text-lg font-medium pb-0.5">Stäng</span>
                        </AppButton>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-y-6 text-2xl items-end text-white">{sideBarLinks}</ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Layout;
