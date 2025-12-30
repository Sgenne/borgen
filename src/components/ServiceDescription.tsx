import { twMerge } from "tailwind-merge";

type Props = {
    descriptionContent: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    className?: string;
};

function ServiceDescription(props: Props) {
    const className = twMerge("grid grid-cols-2 overflow-hidden", props.className);

    return (
        <section className={className}>
            <div className="w-full h-full pe-8">{props.descriptionContent}</div>
            <div className="w-full h-full">
                <img src={props.imageSrc} alt={props.imageAlt} className="w-full h-full object-cover" />
            </div>
        </section>
    );
}

export default ServiceDescription;
