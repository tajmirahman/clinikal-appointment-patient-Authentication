const SingleDoctor = ({ doc, index }) => {
    const isActive = index === 1; // middle card

    return (
        <div
            className={`
                transition-all duration-700 ease-in-out
                rounded-xl overflow-hidden shadow-xl
                ${isActive
                    ? "w-72 scale-110 border-4 border-white z-10 bg-white"
                    : "w-60 scale-90 opacity-70 bg-white/70"
                }
            `}
        >
            <img
                src={doc.img}
                alt={doc.doctor_name}
                className="h-64 w-full object-cover"
            />

            <div className="p-5 text-center">
                <h2 className="text-lg font-semibold">{doc.doctor_name}</h2>
                <p className="text-sm text-gray-500">{doc.specialist}</p>
            </div>
        </div>
    );
};

export default SingleDoctor;
