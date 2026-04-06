import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-27 bg-[url("/img.jpg")]
    bg-cover bg-top h-screen'>
        <img src={assets.harryPotterLogo} alt=" " className='max-h-19 lg:h-31  mt-20'/>
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-137'>Harry Potter and the Deathly Hallows: Part 1</h1>

        <div className='flex items-center gap-4 text-gray-300'>
            <span>Family | Adventure | Fantasy</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5'/>2010
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5'/>2h 26m
            </div>
        </div>
        <p className='max-w-md text-gray-300'>Harry, Ron, and Hermione embark on a dangerous journey to destroy Voldemort's Horcruxes as darkness takes over the wizarding world.</p>
        <button onClick={()=>navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>Explore Movies
            <ArrowRight className='w-5 h-5'/>
        </button>
    </div>
  )
}

export default HeroSection