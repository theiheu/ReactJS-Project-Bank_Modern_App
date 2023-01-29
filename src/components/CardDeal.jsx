import {card} from "../assets/index.js";
import styles, {layout} from "../constants/style.js";
import Button from "./Button.jsx";

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className={"sm:block hidden"}/> in few easy
                    steps.</h2>
                <p className={`${styles.paragraph}`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                    aliquet eget maurids torotor.
                    Aliquet ultrices ac, amtau.</p>
                <Button styles={"mt-10"}/>
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="card" className={"w-[100%] h-[100%]"}/>
            </div>

        </section>
    );
};

export default CardDeal;
