function EnvironmentCertification() {
    return (
        <div className="grid lg:grid-cols-2 text-gray-800">
            <div className="w-full h-full max-w-140 mx-auto pt-12 px-4 xl:px-0">
                <h1 className="text-3xl mb-6">Miljö och certifiering</h1>

                <p className="text-lg mb-4">
                    Med ansvarsförsäkring, F-skattebevis samt certifieringen för Motorsåg AB samt Röjsåg RA och RB utför
                    vi säkra och fackmannamässiga arbeten med yrkesstolthet.
                </p>

                <p className="text-lg mb-4">
                    Vår maskinpark är under ständig utveckling och består huvudsakligen av kvalitetsmaskiner från
                    Husqvarna. Samtliga maskiner drivs med batteri eller med miljövänligt bränsle Aspen alkylatbensin,
                    vilket bidrar till en mer hållbar miljö för både människa och natur.
                </p>
            </div>
            <div className="w-full h-[calc(100vh-95px)] overflow-hidden hidden lg:block">
                <img
                    src="environmentcat.png"
                    alt="En katt med miljöcertifiering"
                    className="w-full h-full object-cover object-[0_25%]"
                />
            </div>
        </div>
    );
}

export default EnvironmentCertification;
