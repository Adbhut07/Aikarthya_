import { Link } from "react-router-dom";
import PIC from "../assets/images/hero-ipad.png";
import S from "../assets/images/student.png";
import T from "../assets/images/teacher.png";

const Acceptance = () => {
    return (
        <div className="flex items-start py-20 gap-1 font-oxygen">
            <div className="flex gap-10 items-center px-20 pt-10">
                <div className="flex flex-col items-center py-10 rounded-lg gap-14 w-[20rem] h-[18rem] bg-[#F6F6F8]">
                    <img src={T} className="mr-14 h-32" alt="" />
                    <Link to={"/teacher-dashboard"} className="bg-[#4278FF] text-[#FFFFFF] px-2.5 py-1.5 text-xs font-semibold text-center rounded-md font-oxygen w-2/4">
                        Are you a Teacher?
                    </Link>
                </div>
                <span className="font-medium">OR</span>
                <div className="flex flex-col items-center py-10 rounded-lg gap-10 w-[20rem] h-[18rem] bg-[#F6F6F8]">
                    <img src={S} className="ml-14 mt-[-18px] h-40" alt="" />
                    <Link to={"/dashboard"} className="bg-[#4278FF] text-[#FFFFFF] px-2.5 py-1.5 text-xs font-semibold text-center rounded-md font-oxygen w-2/4">
                        Are you a Student?
                    </Link>
                </div>
                
            </div>
            <div>
                <img src={PIC} className="h-[28rem]" alt="" />
            </div>
        </div>
    )
};

export default Acceptance;