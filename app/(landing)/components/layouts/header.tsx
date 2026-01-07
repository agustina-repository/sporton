import Link from "next/dist/client/link";
import Image from "next/image";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
   <header className="bg-white shadow-md">
      <div className="flex justify-between gap-10 container mx-auto py-7">
        <Image 
          src = "/images/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
        />

        <nav className="flex gap-44 font font-medium">
          <Link href="#hero-section" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1">Home</Link>
          <Link href="#categoriey-section">Category</Link>
          <Link href="#products-section">Explore Products</Link>
        </nav>

        <div className="flex gap-10">
          <FiSearch size={24}/>
          <div className="relative">
            <FiShoppingBag size={24}/>
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center ">
              3
            </div>            
          </div>

        </div>
      </div>
   </header> 
  )
}
export default Header;