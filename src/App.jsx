import Style from "./constants/style.js";

import {
    Navbar,
    Hero,
    Stats,
    Business,
    Billing,
    CardDeal,
    Testimonials,
    Clients,
    CTA,
    Footer,
} from "./components"

const App = () => {
    return (
        <div className={"bg-primary w-full overflow-hidden"}>
            <div className={`${Style.paddingX} ${Style.flexCenter}`}>
                <div className={`${Style.boxWidth}`}>
                    <Navbar/>
                </div>

            </div>

            <div className={`bg-primary ${Style.flexStart}`}>
                <div className={`${Style.boxWidth}`}>
                    <Hero/>
                </div>
            </div>

            <div className={`bg-primary ${Style.flexStart}`}>
                <div className={`${Style.boxWidth}`}>
                    <Stats/>
                    <Business/>
                    <Billing/>
                    <CardDeal/>
                    <Testimonials/>
                    <Clients/>
                    <CTA/>
                    <Footer/>
                </div>
            </div>

        </div>
    );
};

export default App;
