function Contact() {
    return (
        <div className="w-full min-h-full max-w-200 mx-auto pt-12 px-4 lg:px-0">
            <h1 className="text-3xl mb-6">Kontakta oss</h1>

            <p className="text-lg mb-4">
                Välkommen att höra av dig till Borgen Träd & Trädgård AB. Har du frågor, vill ha offert eller behöver
                rådgivning? Vi hjälper dig gärna.
            </p>

            <p className="text-lg mb-4">
                Telefon: <a href="tel:0722175001" className="text-blue-500 hover:underline">0722-17 50 01</a>
            </p>
            <p className="text-lg mb-4">
                E-post: <a href="mailto:info@borgen.se" className="text-blue-500 hover:underline">info@borgen.se</a>
            </p>
        </div>
    );
}

export default Contact;
