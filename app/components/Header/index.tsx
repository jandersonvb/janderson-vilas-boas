import Link from "next/link";
import Image from "next/image";
import SocialLinks from "../SocialLinks";

export default function Header() {
  return (
    <header className="text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <Link href="/">
          <Image
            src="/logo_branco.png"
            alt="Logo Janderson"
            width={240}
            height={240}
          />
        </Link>
        <nav className="space-x-4 mr-4">
          {/* <Link href="/agenda" className="hover:text-red-500 transition-colors duration-300">Agenda</Link>
          <Link href="/sobre" className="hover:text-red-500 transition-colors duration-300">Sobre</Link> */}

        </nav>
        <SocialLinks />
      </div>
    </header>
    // <header className="bg-transparent absolute top-0 w-full z-10">
    //   <div className="max-w-6xl mx-auto flex items-center justify-between p-6">
    //     <Link href="/">
    //       <Image
    //         src="/logo_branco.png"
    //         alt="Logo Janderson"
    //         width={150}
    //         height={150}
    //       />
    //     </Link>
    //     <nav className="space-x-6 text-white">
    //       <Link href="#agenda" className="hover:text-red-500">Agenda</Link>
    //       <Link href="#sobre" className="hover:text-red-500">Sobre</Link>
    //     </nav>
    //     <SocialLinks />
    //   </div>
    // </header>
  );
}
