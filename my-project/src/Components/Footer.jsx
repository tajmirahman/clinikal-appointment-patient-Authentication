import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#1f2d2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BASIC INFO */}
        <div>
          <h3 className="text-white font-semibold tracking-widest mb-6">
            BASIC INFO
          </h3>

          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-4 border-b border-gray-600 pb-4">
              <FaMapMarkerAlt className="text-lg mt-1" />
              <p>
                Dhaka,Bangladesh
                <br />
                Uttara
              </p>
            </div>

            <div className="flex items-center gap-4 border-b border-gray-600 pb-4">
              <FaPhoneAlt />
              <p>+880 1314761277</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope />
              <p>tajmilurrahman91@gmail.com</p>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold tracking-widest mb-6">
            QUICK LINKS
          </h3>

          <div className="grid grid-cols-2 gap-x-10 text-sm">
            <ul className="space-y-3">
              <Link to={'/'} className="hover:text-white cursor-pointer">Home</Link><br />
              <Link to={'/'} className="hover:text-white cursor-pointer">Contact Us</Link><br />
              <Link to={'/blog-post'} className="hover:text-white cursor-pointer">Blog Post</Link><br />
              <Link to={'/patient-details'} className="hover:text-white cursor-pointer">Appointment</Link><br />
            
            </ul>

            <ul className="space-y-3">
              <Link to={'/auth/login'} className="hover:text-white cursor-pointer w-full">Login</Link><br />
              <Link to={'/auth/register'} className="hover:text-white cursor-pointer w-full">Register</Link>
              
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold tracking-widest mb-6">
            NEWSLETTER
          </h3>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full bg-white text-black"
            />

            <button className="btn bg-cyan-500 hover:bg-cyan-600 border-none text-white w-fit px-8">
              Submit
            </button>

            <div className="flex gap-5 pt-4 text-lg">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaGoogle className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default Footer;