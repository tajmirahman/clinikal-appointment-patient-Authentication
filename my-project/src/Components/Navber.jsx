import Header from "./Header";
import bgImage from "/images/operation-theater.png";

const Navbar = () => {
    return (
        <div
            className="w-full min-h-screen bg-gradient-to-r from-[#148b8f]/20 to-[#148b8f]/20 backdrop"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
        >
            {/* overlay */}
            <div>
                <Header></Header>
            </div>
            
        </div>
    );
};

export default Navbar;
