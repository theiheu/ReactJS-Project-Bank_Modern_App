import styles from "../constants/style.js";
import {clients} from "../constants/index.js";

const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4 px-3`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>{
                clients.map((client) => (
                    <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[128px]`}>
                        <img src={client.logo} alt="client" className={"sm:w-[192px] w-[100px] object-contain"}/>
                    </div>

                ))
            }

            </div>

        </section>
    );
};

export default Clients;
