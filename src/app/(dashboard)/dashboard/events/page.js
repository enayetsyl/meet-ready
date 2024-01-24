
import EventCard from "@/components/EventCard/EventCard";
import { FaMagnifyingGlass } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex flex-col justify-start mt-16 space-y-5">
      <div className="flex justify-center items-center relative border-2">
        <FaMagnifyingGlass className="text-xl absolute left-2 text-gray-600" />
        <input
          type="text"
          placeholder="Search your event here"
          className="input input-bordered pl-8 font-medium border-purple-300 focus:border-purple-300 w-full"
        />
      </div>

      <h1 className="text-2xl font-semibold pl-2 border-l-2 border-purple-500">
        Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        
      </div>

      
    </div>
  );
};

export default page;
