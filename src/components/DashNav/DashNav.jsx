"use client";
import Image from "next/image";
import logo from "@/assets/meetReadyLogo.png";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowRightFromBracket,
  FaCalendar,
  FaLink,
  FaPlus,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import userLogo from "@/assets/userLogo.png";
import mobileLogo from "@/assets/meetReadyLogoMobile.png";
import { useState } from "react";

const DashNav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const pathname = usePathname();

  return (
    <div className={`flex fixed justify-between bg-purple-200 min-h-screen flex-col transition-all duration-300 ${
        isClicked ? 'w-20' : 'w-64'
      }`}>
      <div className={`p-5 space-y-5 flex ${isClicked && 'justify-center items-center'} flex-col relative`}>
        {isClicked ? (
          <button
            onClick={() => setIsClicked(false)}
            className="btn btn-sm absolute right-6 top-2 "
          >
            <FaArrowRight />
          </button>
        ) : (
          <button
            onClick={() => setIsClicked(true)}
            className="btn btn-sm absolute right-2 top-2 "
          >
            <FaArrowLeft />
          </button>
        )}

        {isClicked ? (
          <Link href={"/dashboard"}>
            <Image src={mobileLogo} width={"40"} height={"150"} alt="logo" className="mt-2" />
          </Link>
        ) : (
          <Link href={"/dashboard"}>
            <Image src={logo} width={"200"} height={"150"} alt="logo" />
          </Link>
        )}

        <button className="btn glass bg-emerald-600 hover:bg-emerald-800 text-white text-lg">
          <FaPlus />
          {isClicked ? "" : "Create"}
        </button>

        <Link href={"/dashboard/events"}>
          <p
            className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300  ${isClicked && 'btn glass'} ${
              pathname === "/dashboard/events" &&
              "bg-purple-500 "
            }`}
          >
            <FaLink /> {isClicked ? "" : "Events"}
          </p>
        </Link>

        <Link href={"/dashboard/scheduled-event"}>
          <p
            className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300  ${isClicked && 'btn glass'} ${
              pathname === "/dashboard/scheduled-event" &&
              "bg-purple-500"
            }`}
          >
            <FaCalendar /> {isClicked ? "" : "Scheduled Events"}
          </p>
        </Link>
      </div>

      <div className="flex flex-col space-y-5 p-5">
        <button className="w-full glass btn bg-red-600 text-white btn-sm hover:bg-red-800">
         <FaArrowRightFromBracket/> {isClicked ? '' : 'Log Out'}
        </button>
      </div>
    </div>
  );
};

export default DashNav;
