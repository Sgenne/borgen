function Home() {
    return (
        <div>
            <section className="w-full h-[calc(100vh-95px)] overflow-hidden relative">
                <div className="absolute z-100 text-white h-full w-full flex flex-col items-center justify-between bg-black/40 ">
                    <div className="max-w-7xl mx-auto text-center h-full flex items-center">
                        <h1 className="text-5xl font-semibold">Välkommen till Borgen Träd & Trädgård AB</h1>
                    </div>
                    <div className="w-full h-32 bg-success flex items-center justify-center text-2xl font-medium gap-x-8">
                        <span>Trädgård</span> <span>•</span> <span>Trädfällning</span> <span>•</span>{" "}
                        <span>Naturvård</span> <span>•</span> <span>Snöröjning</span>
                    </div>
                </div>
                <img
                    src="lumbercat.png"
                    alt="Katt hugger ner träd"
                    className="object-cover object-[0_35%] w-full h-full"
                />
            </section>
            <section className="grid lg:grid-cols-2">
                <h2 className="sr-only">Om oss</h2>
                <div className="text-gray-800 text-xl p-10 gap-y-5 flex flex-col justify-start px-4">
                    <span className="font-semibold text-3xl">Välkommen till Borgen Träd & Trädgård AB!</span>
                    <p>
                        Vi erbjuder tjänster inom trädgård, trädfällning, naturvård och snöröjning för företag,
                        kommuner, föreningar, privatpersoner samt mark- och skogsägare.
                    </p>
                    <p>
                        Vårt arbete präglas av kvalitet, säkerhet och hållbarhet. Vi värdesätter det förtroende våra
                        kunder visar oss och strävar alltid efter långsiktiga samarbeten.
                    </p>
                    <p>Välkommen att kontakta oss.</p>
                </div>
                <div className="overflow-hidden hidden lg:block">
                    <img
                        src="lumbeaver_lumbercat.png"
                        alt="Katt och bäver hugger ner träd"
                        className="object-cover w-full max-h-225"
                    />
                </div>
            </section>
        </div>
    );
}

export default Home;
