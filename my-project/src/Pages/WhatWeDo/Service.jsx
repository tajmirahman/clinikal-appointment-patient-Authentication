

const Service = ({ service }) => {
    return (

        

        <div className="space-y-5">

            <div>
                <figure className="flex flex-col items-center justify-center w-20 h-20 *:border mx-auto border rounded-xl cursor-pointer hover:bg-[#32c1ce] hover:text-white transition-all duration-300">
                    <img className="flex items-center justify-center w-16 h-16 rounded-lg" src={service.icon} alt="" />
                </figure>
                <h2 className="text-sm font-medium text-center">{service.disease_title}</h2>

            </div>
            

        </div>
    );
};

export default Service;