import Image from 'next/image'
import logo from '../../public/logo-completo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const data = new Date();
  const ano = data.getFullYear();
  return (
    <div className='w-screen flex flex-col justify-center items-center 
    '>
      <Image src={logo} className='w-56 pt-10'/>
      <div className='space-x-5 flex justify-center items-center flex-wrap p-5'>
          <a href='https://www.instagram.com/negociosdeesporte/'target='_blank' className='text-azul hover:text-yellow-500 md:text-3xl transition-all ease-out duration-300'>
              <FontAwesomeIcon icon={faInstagram} className='text-3xl'/>
            </a>
            <a href='https://www.facebook.com/negociosdeesporte'className='text-azul hover:text-yellow-500 md:text-3xl transition-all ease-out duration-300' target="_blank">
              <FontAwesomeIcon icon={faFacebook} className='text-3xl' />
            </a>
            <a href='https://twitter.com/NegocioEsportes'className='text-azul hover:text-yellow-500 md:text-3xl transition-all ease-out duration-300'target="_blank">
              <FontAwesomeIcon icon={faTwitter} className='text-3xl' />
            </a>
            <a href='https://wa.me/5535999689766'target="_blank" className='text-azul hover:text-yellow-500 md:text-3xl transition-all ease-out duration-300 '>
              <FontAwesomeIcon icon={faWhatsapp} className='text-3xl ' />
            </a>
            <a href="https://wa.me/5535999689766"target="_blank"className='hidden md:block text-azul hover:text-yellow-500 transition-all ease-out duration-300'>(35) 9 9968-9766</a>
          </div>
      <div className='flex justify-center items-center flex-col pb-2 text-center'>
        <p>{ano},Negócios de Esporte - Todos os Direitos Reservados</p>
        <a href='https://rixxer.vercel.app/' className='text-azul hover:text-yellow-500'>Developed by Rixxer &trade;</a>
      </div>
    </div>
  )
}
