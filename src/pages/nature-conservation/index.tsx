function NatureConservation() {
    return (
        <div className="grid lg:grid-cols-2 text-gray-800">
            <div className="w-full h-full max-w-140 mx-auto pt-12 px-4 xl:px-0">
                <h1 className="text-3xl mb-2">Naturvård</h1>

                <p className="text-lg">
                    Skydda, bevara och förvalta natur och biologiskt mångfald för en hållbar framtid.
                </p>
            </div>
            <div className="w-full h-[calc(100vh-95px)] overflow-hidden hidden lg:block lg:sticky top-[95px]">
                <img
                    src="catnatureconservationist.png"
                    alt="En katt i naturen"
                    className="w-full h-full object-cover object-[0_25%]"
                />
            </div>
        </div>
    );
}

export default NatureConservation;
