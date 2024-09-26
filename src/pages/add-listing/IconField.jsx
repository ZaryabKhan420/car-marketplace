import React from "react";
import { FaCar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaDoorClosed } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { MdOutlineMoving } from "react-icons/md";
import { RiIdCardFill } from "react-icons/ri";
const IconField = ({ icon }) => {
  const iconMap = {
    FaCar: <FaCar />,
    FaCheckCircle: <FaCheckCircle />,
    FaIndustry: <FaIndustry />,
    FaCarSide: <FaCarSide />,
    FaCalendarAlt: <FaCalendarAlt />,
    FaRoad: <FaRoad />,
    FaCogs: <FaCogs />,
    FaGasPump: <FaGasPump />,
    FaTachometerAlt: <FaTachometerAlt />,
    FaWrench: <FaWrench />,
    FaCircle: <FaCircle />,
    FaPalette: <FaPalette />,
    FaDoorClosed: <FaDoorClosed />,
    FaClipboardList: <FaClipboardList />,
    FaDollarSign: <FaDollarSign />,
    FaMoneyBillAlt: <FaMoneyBillAlt />,
    FaTag: <FaTag />,
    MdOutlineMoving: <MdOutlineMoving />,
    RiIdCardFill: <RiIdCardFill />,
  };
  return (
    <div className="bg-blue-200 text-primary p-2 text-sm rounded-full">
      {iconMap[icon]}
    </div>
  );
};

export default IconField;
