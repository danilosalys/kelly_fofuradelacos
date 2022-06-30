import LogoFooter from '../LogoFooter'
import InstagramIcon from '../../assets/instagramicon.png'
import WhatsAppIcon from '../../assets/whatsappicon.png'
import GamaBadge from '../../assets/gamabadge.png'
import Securitybadge from '../../assets/securitybadge.png'
import GenericBadge from '../../assets/genericbadge.png'
import '../../index.css'

function Footer() {
  return (
    <footer className="h-[300px] bg-[#BC8383] w-screen flex flex-col md:flex-row items-center justify-around text-[28px] font-normal text-[#F9F7F4]">
      <div className='flex gap-[63px]'>
        <div className='hidden md:inline mb-'>
          <LogoFooter />
          <p className='text-p4 text-bege-100'>&copy; 2022 | All Rights Reserved.</p>
        </div>
        <div className='flex flex-col justify-center'>
         <div className='flex gap-[68px]'>
         <div className='flex flex-col font-fiona text-h4 items-center md:items-start'>
            <a href="#">Sobre nós</a>
            <a href="#">Dúvidas</a>
          </div>
          <div className='flex flex-col font-fiona items-center md:items-start'>
            <a href="#">Loja</a>
            <a href="#">Personalize</a>
          </div>
         </div>
          <div className='flex gap-6 mt-16 text-h4 justify-center md:justify-start'>
            <a href="#"><img src={InstagramIcon} alt="" /></a>
            <a href="#"><img src={WhatsAppIcon} alt="" /></a>
          </div>
        </div>
      </div>
      <div className='font-fiona text-h4 text-center md:text-right gap-4 flex-col'>
        <p>Certificados</p>
        <div className='flex gap-5'>
          <img className='w-[2.5rem] h-[2.5rem] md:w-full md:h-full' src={GenericBadge} alt="" />
          <img className='w-[2.5rem] h-[2.5rem] md:w-full md:h-full' src={Securitybadge} alt="" />
          <img className='w-[2.5rem] h-[2.5rem] md:w-full md:h-full' src={GamaBadge} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer