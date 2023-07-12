import Image from 'next/image'
import image1 from '../../public/01.png'
import image2 from '../../public/02.png'
import image3 from '../../public/03.png'
import image4 from '../../public/04.png'
import image5 from '../../public/05.png'
import image6 from '../../public/06.png'
import image7 from '../../public/07.png'
import image8 from '../../public/08.png'
import image9 from '../../public/09.png'
import image10 from '../../public/10.png'
import image11 from '../../public/11.png'
import image12 from '../../public/12.png'
import image13 from '../../public/13.png'
import image14 from '../../public/14.png'
import image15 from '../../public/15.png'
import image16 from '../../public/16.png'
import image17 from '../../public/17.png'
import logo from '../../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Card from '@/components/Card';
import Wpp from '@/components/Wpp'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <div className='px-10 bg-bg1 bg-no-repeat bg-cover flex h-[500px] md:h-full flex-col'>
        <div className='flex flex-col md:flex-row space-y-6 justify-between items-center p-5 md:px-16 '>
          <Image src={logo} alt='logo' className='w-36 drop-shadow-sm' />
          <div className='space-x-5 flex justify-center items-center flex-wrap'>
          <a href='https://www.instagram.com/negociosdeesporte/'target='_blank' className='text-white hover:text-yellow-500 md:text-3xl transition-all ease-out duration-300'>
              <FontAwesomeIcon icon={faInstagram} className='text-3xl'/>
            </a>
            <a href='https://www.facebook.com/negociosdeesporte'className='text-white hover:text-yellow-500 md:text-3xl transition-all ease-out duration-300' target="_blank">
              <FontAwesomeIcon icon={faFacebook} className='text-3xl' />
            </a>
            <a href='https://twitter.com/NegocioEsportes'className='text-white hover:text-yellow-500 md:text-3xl transition-all ease-out duration-300'target="_blank">
              <FontAwesomeIcon icon={faTwitter} className='text-3xl' />
            </a>
            <a href='https://wa.me/5535999689766'target="_blank" className='text-white hover:text-yellow-500 md:text-3xl transition-all ease-out duration-300 '>
              <FontAwesomeIcon icon={faWhatsapp} className='text-3xl ' />
            </a>
            <a href="https://wa.me/5535999689766"target="_blank"className='hidden md:block text-white hover:text-yellow-500 transition-all ease-out duration-300'>(35) 9 9968-9766</a>
          </div>
        </div>
        <div className='flex h-screen mt-5 md:mt-0 justify-center items-center md:justify-start md:items-start'>
          <div className='flex flex-col md:px-16 md:pt-48 text-center justify-center items-center md:items-start'>
            <h1 className='text-5xl md:text-7xl font-bold text-yellow-400'>UNIFORMES</h1>
            <h1 className='text-5xl md:text-7xl font-bold text-yellow-400'>ESPORTIVOS</h1>
            <h2 className='text-white font-bold py-5 shadow-sm'>Criamos um design personalizado para times campeões.</h2>
            <a href="https://wa.me/5535999689766"target="_blank">
            <button className='bg-yellow-500 hover:bg-white transition-all ease-out duration-300 w-64 flex justify-center items-center gap-5 rounded-xl py-2 text-slate-950  drop-shadow-sm font-bold'>Entre em contato
              <FontAwesomeIcon icon={faWhatsapp} className='text-slate-950 text-3xl' />
            </button>
            </a>
          </div>
        </div>
      </div>
      <div className='bg-slate-950 flex justify-center text-center flex-col items-center pt-20'>
        <h2 className='text-yellow-500 p-10 text-xl font-bold'>Descubra a ampla variedade de produtos da Negocios de Esporte.</h2>
        <h2 className='text-white text-5xl font-bold'>EXPLORE NOSSOS PRODUTOS</h2>
        <div className='bg-yellow-500 w-1 h-20 mt-5' />
        <div className='flex flex-col md:flex-row flex-wrap pt-5 justify-center items-center'>
          <Card descricao='Camisa Gola Careca​ Manga Curta'
            sub='NE101'
            imagem={<Image src={image1} alt='logo' />}
          />
          <Card descricao='Camisa Gola Careca Manga Longa'
            sub='NE102'
            imagem={<Image src={image2} alt='logo' />}
          />
          <Card descricao='Camisa Gola V Manga Curta'
            sub='NE103'
            imagem={<Image src={image3} alt='logo' />}
          />
          <Card descricao='Camisa Gola V Manga Longa'
            sub='NE104'
            imagem={<Image src={image4} alt='logo' />}
          />
          <Card descricao='Camisa Baby Look Gola Careca Manga Curta'
            sub='NE105'
            imagem={<Image src={image5} alt='logo' />}
          />
          <Card descricao='Camisa Baby Look Gola Careca Manga Longa'
            sub='NE106'
            imagem={<Image src={image6} alt='logo' />}
          />
          <Card descricao='Camisa Gola V Manga Longa'
            sub='NE107'
            imagem={<Image src={image7} alt='logo' />}
          />
          <Card descricao='Camisa Baby Look Gola Careca Manga Longa'
            sub='NE108'
            imagem={<Image src={image8} alt='logo' />}
          />
          <Card descricao='Camisa Regata'
            sub='NE109'
            imagem={<Image src={image9} alt='logo' />}
          />
          <Card descricao='Camisa Gola Careca Manga Raglan Curta'
            sub='NE110'
            imagem={<Image src={image10} alt='logo' />}
          />
          <Card descricao='Camisa Gola Careca Manga Raglan Longa'
            sub='NE111'
            imagem={<Image src={image11} alt='logo' />}
          />
          <Card descricao='Camisa Gola V Manga Raglan Curta'
            sub='NE112'
            imagem={<Image src={image12} alt='logo' />}
          />
          <Card descricao='Camisa Gola V Manga Raglan Longa'
            sub='NE113'
            imagem={<Image src={image13} alt='logo' />}
          />
          <Card descricao='Camisa Baby Look Gola Careca Manga Raglan Curta'
            sub='NE114'
            imagem={<Image src={image14} alt='logo' />}
          />
          <Card descricao='Camisa Gola Careca Manga Raglan Longa'
            sub='NE115'
            imagem={<Image src={image15} alt='logo' />}
          />
          <Card descricao='Camisa Baby Look Gola V Manga Raglan Curta'
            sub='NE116'
            imagem={<Image src={image16} alt='logo' />}
          />
          <Card descricao='Camisa Baby Look Gola V Manga Raglan Longa'
            sub='NE117'
            imagem={<Image src={image17} alt='logo' />}
          />
        </div>
        <div className='flex flex-col justify-center items-center mb-20'>
          <div className='bg-yellow-500 w-1 h-20 mt-5 mb-5' />
          <h2 className='text-yellow-500 p-10 text-xl font-bold'>Escolheu seu produto?</h2>
          <h2 className='text-white md:text-5xl font-bold'>AGORA É SÓ ENTRAR EM CONTATO</h2>
          <a href="https://wa.me/5535999689766"target="_blank">
            <button className='bg-yellow-500 hover:bg-white transition-all  ease-out duration-300 flex justify-center items-center gap-5 rounded-xl py-2 px-5 mt-10 text-slate-950  drop-shadow-sm font-bold'>FALE AGORA CONOSCO PELO WHATSAPP
              <FontAwesomeIcon icon={faWhatsapp} className='text-slate-950 text-3xl'/>
            </button>
            </a>
        </div>
      </div>
      <Footer/>
      <Wpp/>
    </div>
  )
}
