import { FaAddressBook, FaHouseChimney, FaBlog } from "react-icons/fa6";



export const sideLinks =[
    {
        icon: <FaHouseChimney/>,
        route: "/",
        label: "Home",
      },
      {
        icon: <FaAddressBook/>,
        route: "/about",
        label: "About",
      },
      {
        icon: <FaBlog/>,
        route: "/blog",
        label: "Blog",
      },
]