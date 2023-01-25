import Style from "../constants/style.js";
import {arrowUp} from "../assets/index.js";

const GetStarted = () => {
    return (
        <div className={`${Style.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${Style.flexCenter} w-[100%] h-[100%] flex-col rounded-full bg-primary`}>
                <div className={`${Style.flexStart} flex-row`}>
                    <p className={"font -poppins font-medium text-[18px] leading-[23px] mr-2"}>
                        <span className={"text-gradient"}>
                            Get
                        </span>
                    </p>
                    <img src={arrowUp} alt="arrowUp" className={"w-[23px] h-[23px] object-contain"}/>
                </div>

                <p className={"font-poppins font-medium text-[18px] leading-[23px]"}>
                        <span className={"text-gradient"}>
                            Started
                        </span>
                </p>
            </div>

        </div>
    );
};

export default GetStarted;
