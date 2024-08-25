import { Link } from "react-router-dom";
import PIC from "../assets/images/hero-ipad.png";
import T from "../assets/images/teacher.png";

const TeacherForm = ({ name = "Teacher" }) => {
    return (
        <div className="flex items-center justify-center py-20 gap-20">
            <div className="flex gap-4 mb-20">
                <div>
                    <img src={T} className="h-28" alt="Teacher" />
                </div>
                <div className="flex flex-col gap-3">
                    <span>Hi {name}</span>
                    <div className="bg-[#F6F6F8] flex flex-col gap-4 px-16 py-10 rounded-lg">
                        <span>{name}</span>
                        <input
                            type="text"
                            placeholder="Enter your College Details"
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                        />
                        <input
                            type="email"
                            placeholder="Enter your Mobile Number"
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                        />
                        <input
                            type="text"
                            placeholder="Enter your Qualification"
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                        />
                        <input
                            type="tel"
                            placeholder="Enter your research experience"
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                        />
                        <input
                            type="text"
                            placeholder="Enter your Projects"
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                        />
                        <input
                            type="text"
                            placeholder="Enter your keywords"
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                        />

                        <Link to={"/teacher-form"} className="bg-[#4278FF] text-[#FFFFFF] px-2.5 py-1.5 text-xs font-semibold text-center rounded-md font-oxygen w-2/4">
                            Submit
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <img src={PIC} className="max-h-[28rem] w-auto" alt="Teacher with iPad" />
            </div>
        </div>
    );
};

export default TeacherForm;
