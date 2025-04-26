import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <Image
          src="/J4.jpg"
          alt="Background"
          className="object-cover w-full h-full"
          objectFit="cover"
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}

        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold mb-4">Bem-vindo</h1>
        <p className="text-lg mb-6">
          Seja bem-vindo ao nosso site! Aqui você encontrará todas as informações sobre nossos shows, eventos e muito mais.<br></br> Fique à vontade para explorar e descobrir tudo o que temos a oferecer.
        </p>
        <Link
          href="#agenda"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg transition duration-300"
        >
          Próximos Shows
        </Link>
      </div>
    </div >
  )
}
