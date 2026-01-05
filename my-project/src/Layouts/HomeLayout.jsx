
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';
import WhoWeAre from '../Pages/WhoWeAre/WhoWeAre';
import WhyChooseUs from '../Pages/WhyChooseUs/WhyChooseUs';
import OurTeams from '../Pages/OurTeams/OurTeams';
import LatestPost from '../Pages/LatestPost/LatestPost';

const HomeLayout = () => {
    return (
        <div className=''>
            {/* Navber section  */}
            <section>
                <Navber></Navber>
            </section>

            <aside>
                <Outlet></Outlet>
            </aside>

            <section >
                <WhoWeAre></WhoWeAre>
            </section>

            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>

            <section>
                <OurTeams></OurTeams>
            </section>

            <section>
                <LatestPost></LatestPost>
            </section>


            {/* footer */}
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;