import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaDev, FaLinkedinIn } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-10 px-4 py-2 bg-slate-600 drop-shadow-xl">
            <div className="flex flex-col justify-between mx-auto sm:flex-row">
                <h1 className="grid mb-2 text-3xl font-bold text-white place-content-center md:mb-0">
                    <Link href="/" className="no-underline  hover:text-white text-[2rem] bg-gradient-to-l from-[#f5f7fa] to-[#85afe8] text-transparent bg-clip-text">Osama Shaikh</Link>
                </h1>
                <div className="flex flex-row justify-center gap-4 text-3xl text-white align-middle sm:justify-evenly lg:text-5xl">
                    <Link className=" text-white/90 hover:text-white" href="https://github.com/Osamashaikh90">
                       <FaGithub className="h-9 filter-drop1"/>
                    </Link>
                    <Link className=" text-white/90 hover:text-white" href="https://dev.to/osamashaikh90/">
                        <FaDev className="h-9 filter-drop2"/>
                    </Link>
                    <Link className=" text-white/90 hover:text-white" href="https://www.linkedin.com/in/osama-shaikh-8641a5211/">
                        <FaLinkedinIn className="h-9 filter-drop3"/>
                    </Link>
                    <Link className=" text-white/90 hover:text-white" href="https://twitter.com/Osamash03705044">
                        <FaTwitter className="h-9 filter-drop4"/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}