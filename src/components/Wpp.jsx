import Image from "next/image"
import Link from "next/link"
import wpp from "../../public/whatsapp.png"

export default function Wpp() {

    return (

        <div className="transition ease-in-out duration-300 fixed bottom-1 md:bottom-5 right-5 opacity-80 z-50 hover:opacity-100">
            <Link href='https://wa.me/5535999689766' target="_blank">
            <Image src={wpp} alt="whatsapp"   width={60} 
            className="w-14 md:w-16"
            />
            </Link>
        </div>
    )

}