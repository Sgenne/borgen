function Rut() {
    return (
        <div className="grid lg:grid-cols-2 text-gray-800">
            <div className="w-full h-full max-w-140 mx-auto pt-12 px-4 xl:px-0">
                <h1 className="text-3xl mb-6">RUT-avdrag</h1>

                <p className="text-lg mb-4">
                    Flertalet av våra tjänster omfattas av RUT-avdraget. Det innebär att ni som privatperson kan få upp
                    till 50 % rabatt på arbetskostnaden.
                </p>

                <p className="text-lg mb-4">
                    För att använda RUT-avdraget måste arbetet utföras på en privatbostad som ni äger eller hyr, och
                    Skatteverkets krav måste uppfyllas.
                </p>

                <p className="text-lg">
                    Är ni osäkra på om ni kan använda RUT-avdraget? Kontakta oss! Vi guidar er genom reglerna, ger
                    rådgivning och hjälper till med ansökan hos Skatteverket – smidigt och tryggt.
                </p>
            </div>
            <div className="w-full h-[calc(100vh-95px)] overflow-hidden hidden lg:block lg:sticky top-[95px]">
                <img
                    src="rutcat.png"
                    alt="En katt som skottar snö"
                    className="w-full h-full object-cover object-[0_25%]"
                />
            </div>
        </div>
    );
}

export default Rut;
