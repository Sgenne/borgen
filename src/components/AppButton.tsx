import { Button } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "success" | "neutral";
};

function AppButton(props: Props) {
    const variantClassName =
        props.variant === "success"
            ? "bg-success data-hover:bg-success-hover data-open:bg-success-hover"
            : props.variant === "neutral"
            ? "bg-gray-600 data-hover:bg-gray-500 data-open:bg-gray-600"
            : "text-black";
    const className = twMerge(
        "inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:cursor-pointer transition-colors",
        variantClassName,
        props.className
    );

    return (
        <Button className={className} onClick={props.onClick}>
            {props.children}
        </Button>
    );
}

export default AppButton;
