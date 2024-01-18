
import { sideLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation"

const Menu = () => {
    const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
        {sideLinks?.map((link)=>{
            const isActive = pathname === link.route
            return(
                <Link key={link.label} href={link.route} className={`flex gap-4 justify-start bg-orange-400 rounded-lg py-2 px-4 ${isActive && 'bg-purple-700 shadow-md shadow-rose-400'}`}>{link.icon} <p className="text-gray-200">{link.label}</p></Link>

            )
        })}
      
    </div>
  )
}

export default Menu
