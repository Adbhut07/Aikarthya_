import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PIC from "../assets/images/hero-ipad.png";

const SignUp = ({ name = "Default" }) => {
    const [formData, setFormData] = useState({
        college: "",
        mobile: "",
        qualification: "",
        experience: "",
        institution: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if at least one field is filled
        if (Object.values(formData).some(value => value.trim() !== "")) {
            navigate("/teacher-form");
        } else {
            alert("Please fill at least one field");
        }
    };

    return (
        <div className="flex items-center justify-center py-20 gap-20">
            <div className="flex gap-4 mb-20">
                <div className="flex flex-col gap-3">
                    <span>Hi {name}</span>
                    <form onSubmit={handleSubmit} className="bg-[#F6F6F8] flex flex-col gap-4 px-16 py-10 rounded-lg">
                        <span>{name}</span>
                        <input
                            type="text"
                            name="college"
                            placeholder="Enter your College Details"
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="mobile"
                            placeholder="Enter your Mobile Number"
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="qualification"
                            placeholder="Enter your Qualification"
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="experience"
                            placeholder="Enter your research experience"
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="institution"
                            placeholder="Enter your institution..."
                            className="bg-transparent border-2 rounded-lg placeholder:p-2 text-sm p-1 w-[24rem] focus:ring-[#4278FF] focus:ring-1"
                            onChange={handleChange}
                        />

                        <Link to={"/acceptance"}>
                        <button type="submit" className="bg-[#4278FF] text-[#FFFFFF] px-2.5 py-1.5 text-xs font-semibold text-center rounded-md font-oxygen w-2/4">
                            Submit
                        </button>
                        </Link>
                    </form>
                </div>
            </div>
            <div>
                <img src={PIC} className="max-h-[28rem] w-auto" alt="Teacher with iPad" />
            </div>
        </div>
    );
};

export default SignUp;