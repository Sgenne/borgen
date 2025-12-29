import { Link, NavLink } from "react-router";
import AppButton from "./components/AppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
import { faTree } from "@fortawesome/free-solid-svg-icons/faTree";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

type Props = {
    children: React.ReactNode;
};

const links = [
    { to: "/", text: "Start" },
    {
        text: "Tjänster",
        to: "/services",
        options: [
            {
                text: "Trädgård och grönytor",
                to: "/services#gardening"
            },
            {
                text: "Gräsklippning",
                to: "/services#lawn-mowing"
            },
            {
                text: "Trädfällning och beskärning",
                to: "/services#tree-felling"
            },
            {
                text: "Vertikalskärning",
                to: "/services#vertical-cutting"
            },
            {
                text: "Mossrivning",
                to: "/services#moss-removal"
            },
            {
                text: "Ogräsrensning",
                to: "/services#weed-removal"
            },
            {
                text: "Lövuppsamling",
                to: "/services#leaf-collection"
            }
        ]
    },
    { to: "/rut", text: "RUT avdrag" },
    { to: "/news-archive", text: "Nyheter & arkiv" },
    { to: "/environment-certification", text: "Miljö & Certifiering" },
    { to: "/about", text: "Om oss" },
    { to: "/contact", text: "Kontakt" }
];

function Layout(props: Props) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const navBarLinks = links.map((link) => (
        <li key={link.to}>
            {link.text !== "Tjänster" ? (
                <NavLink
                    to={link.to ?? "/"}
                    className={({ isActive }) =>
                        `me-4 whitespace-nowrap ${isActive ? "text-gray-600" : "text-gray-800 hover:underline"}`
                    }
                    onClick={() => setIsSideBarOpen(false)}
                >
                    {link.text}
                </NavLink>
            ) : link.text === "Tjänster" && link.options ? (
                <Menu>
                    <MenuButton className="me-4 whitespace-nowrap text-gray-800 hover:underline hover:cursor-pointer">
                        Tjänster
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom"
                        modal={false}
                        className="absolute w-52 origin-top-right rounded-xl border border-black/5 bg-white text-sm/6 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 z-400"
                    >
                        {link.options.map((o) => (
                            <Link to={o.to} key={o.to}>
                                <MenuItem as="div" className="p-2 whitespace-nowrap text-gray-600 hover:bg-gray-100">
                                    {o.text}
                                </MenuItem>
                            </Link>
                        ))}
                    </MenuItems>
                </Menu>
            ) : null}
        </li>
    ));

    const sideBarLinks = links.map((link) => (
        <li key={link.to}>
            {link.text !== "Tjänster" ? (
                <Link
                    to={link.to ?? "/"}
                    className="text-3xl font-medium me-4 whitespace-nowrap text-white hover:underline"
                    onClick={() => setIsSideBarOpen(false)}
                >
                    {link.text}
                </Link>
            ) : link.text === "Tjänster" && link.options ? (
                <div className="text-end">
                    <Link
                        to={link.to}
                        className="text-3xl font-medium me-4 whitespace-nowrap text-white hover:underline"
                        onClick={() => setIsSideBarOpen(false)}
                    >
                        Tjänster
                    </Link>
                    <ul className={"px-4"}>
                        {link.options.map((o) => (
                            <li>
                                <Link
                                    to={o.to ?? "/"}
                                    className="text-2xl font-medium me-4 whitespace-nowrap text-white hover:underline"
                                    onClick={() => setIsSideBarOpen(false)}
                                >
                                    {o.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </li>
    ));

    return (
        <div className="min-h-screen">
            <div className="h-[95px]"></div>
            <nav className="top-0 left-0 fixed grid grid-cols-10 h-[95px] border-b border-neutral-100 shadow-md items-center px-4 z-200 bg-white w-full">
                <Link to="/" onClick={() => setIsSideBarOpen(false)}>
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
                <div className="min-h-full bg-[#fcfcfc]">{props.children}</div>
                <div
                    className={`fixed top-0 end-0 h-full w-full bg-[#111111] text-white p-4 transition-all duration-100 z-300 ${
                        isSideBarOpen ? "translate-x-0 lg:translate-x-full" : "translate-x-full"
                    }`}
                >
                    <div className="flex justify-between ">
                        <Link
                            to="/"
                            className="text-4xl font-bold whitespace-nowrap"
                            onClick={() => setIsSideBarOpen(false)}
                        >
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
