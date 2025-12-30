function SnowAndIce() {
    return (
        <div className="grid lg:grid-cols-2 text-gray-800">
            <div className="w-full h-full max-w-140 mx-auto pt-12 px-4 xl:px-0">
                <h1 className="text-3xl mb-6">Snö och halka</h1>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Snöröjning</h2>
                    <p className="text-lg">Pålitlig snöröjning av vägar, uppfarter och gångar.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Halkbekämpning</h2>
                    <p className="text-lg">Sandning och halkskydd för säkra ytor vintertid.</p>
                </div>
            </div>
            <div className="w-full h-[calc(100vh-95px)] overflow-hidden hidden lg:block lg:sticky top-[95px]">
                <img
                    src="catsnowshoveling.png"
                    alt="En katt som skottar snö"
                    className="w-full h-full object-cover object-[0_25%]"
                />
            </div>
        </div>
    );
}

export default SnowAndIce;
