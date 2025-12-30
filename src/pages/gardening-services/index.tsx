function GardeningServices() {
    return (
        <div className="grid lg:grid-cols-2 text-gray-800">
            <div className="w-full h-full max-w-140 mx-auto pt-12 px-4 xl:px-0">
                <h1 className="text-3xl mb-6">Trädgård och grönytor</h1>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Gräsklippning </h2>
                    <p className="text-lg">Regelbunden och noggrann klippning för en välskött och stark gräsmatta.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Trimning</h2>
                    <p className="text-lg">Finjustering runt kanter, träd, rabatter och svåråtkomliga ytor.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Vertikalskärning</h2>
                    <p className="text-lg">
                        Förbättrar gräsmattans syretillförsel och tillväxt. Friskare gräsmatta med bättre tillväxt och
                        tätare grönska.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Mossrivning</h2>
                    <p className="text-lg">Avlägsnar mossa och dött material för en friskare gräsmatta.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Ogräsrensning</h2>
                    <p className="text-lg"> Effektiv borttagning av ogräs i rabatter, gångar och ytor.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Lövuppsamling</h2>
                    <p className="text-lg">Uppsamling och bortforsling av löv.</p>
                </div>
            </div>
            <div className="w-full h-[calc(100vh-95px)] overflow-hidden hidden lg:block lg:sticky top-[95px]">
                <img src="gardencat.png" alt="En katt som klipper gräsmattan" className="w-full h-full object-cover object-[0_25%]" />
            </div>
        </div>
    );
}

export default GardeningServices;
