function ForestServices() {
    return (
        <div className="grid lg:grid-cols-2 text-gray-800">
            <div className="w-full h-full max-w-140 mx-auto pt-12 px-4 xl:px-0">
                <h1 className="text-3xl mb-6">Träd och skog </h1>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Häck- och formklippning </h2>
                    <p className="text-lg">Klippning som ger häckar och buskar rätt form och täthet.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Tradition trädfällning (markfällning)</h2>
                    <p className="text-lg">Säker och kontrollerad fällning av träd, även i svåra miljöer.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Gallring</h2>
                    <p className="text-lg">Uttunning av träd och buskar för bättre ljus och tillväxt.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Slyröjning</h2>
                    <p className="text-lg">
                        {" "}
                        Genom slyröjning kan du öka virkesvärdet på din skog. Tillväxten på omkringliggande stammar blir
                        starkare och större om omgivande sly tas bort.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">
                        Bortforsling och stubbfräsning
                    </h2>
                    <p className="text-lg">
                        Borttagning av stubbar på ett smidigt och skonsamt sätt.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Beskärning</h2>
                    <p className="text-lg">Vårdande beskärning för starkare och friskare träd och buskar.</p>
                </div>
            </div>
            <div className="w-full h-[calc(100vh-95px)] overflow-hidden hidden lg:block lg:sticky top-[95px]">
                <img
                    src="lumbeaver_lumbercat.png"
                    alt="En katt som klipper gräsmattan"
                    className="w-full h-full object-cover object-[0_25%]"
                />
            </div>
        </div>
    );
}

export default ForestServices;
