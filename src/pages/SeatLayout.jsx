import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../components/Loading'
import {ArrowRightIcon, ClockIcon} from 'lucide-react'
import isoTimeFormat from '../lib/isoTimeFormat'
import BlurCircle from '../components/BlurCircle'
import toast from 'react-hot-toast'

function SeatLayout() {
  const groupRows = [["A","B"],["C","D"],["E","F"],["G","H"],["I","J"]]
  const {id, date} = useParams()
  const [SelectedSeats,setSelectedSeats] = useState([])
  const [selectedTime ,setSelectedTime] = useState(null)
  const [show,setShow] = useState(null)

  const navigate= useNavigate()

  const getShow = async ()=>{
    const show = dummyShowsData.find(show=> show._id === id)
    //jo is url se uthai h usko data mese match kro konse show ki h
    if(show){
      setShow({
        movie:show, //movie details
        dateTime:dummyDateTimeData //timmings
      })// sab show state me sab aagya show.movie. ___ / show.dateTime[--]
    }
  }

  const handleSeatClick = (seatId)=>{
    if(!selectedTime){
      return toast("please select time first")
    }
    if(!SelectedSeats.includes(seatId) && SelectedSeats.length >4){// nayi click kri vo selected me nhi h and ab length already 4 h
      return toast("you can only select 5 seats")
    }
    setSelectedSeats(prev=> prev.includes(seatId) 
    ? prev.filter(seat => seat !== seatId)// already selected -> deselect
    :[...prev, seatId ]) // not selected ->add
  }

  const renderSeats =(row, count=9)=>(
    <div key={row} className='flex gap-2 mt-2'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
          {Array.from({length: count}, (_, i) =>{// _ is the unused argument value
            //Array.from creates a temporary array just to loop a specific number of times and generate buttons dynamically, instead of hardcoding every seat manually.
            const seatId = `${row}${i+1}`;// A1, A2
            return(
              <button key={seatId} onClick={()=>handleSeatClick(seatId)}
               className={`h-8 w-8 rounded border border-gray-00/60 cursor-pointer ${SelectedSeats.includes(seatId) && "bg-primary text-white border-primary"}`}>
                {seatId}
              </button>
            );
          })}
      </div>
    </div>
  )

  useEffect(()=>{
    getShow()
  },[])

  return show ? (
      <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>
        
        <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>
        <p className='text-lg font-semibold px-6'>Available Timmings</p>
        <div className='mt-5 space-y-1'>
          {show.dateTime[date].map((item)=>(
            // date from url 
            <div key={item.time} onClick={()=> setSelectedTime(item)} className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition 
            ${selectedTime?.time === item.time ?"bg-primary text-white":'hover:bg-primary/20'}`}>
              {/* selectedTime?.time   , ?.  to safely access .time if selected time is null it will give undefined instead of crashing*/}
              <ClockIcon className='w-4 h-4'/>
              <p className='text-sm'>{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>
        <BlurCircle top='-100px' left='-100px'/>
        <BlurCircle bottom='0' right='0'/>
        <h1 className='text-2xl font-semibold mb-4'>Select Your seat</h1>
        <img src={assets.screenImage} alt='screen'/>
        <p className='text-gray-400 text-sm mb-6'>SCREEN SIDE</p>

        <div className='flex flex-col items-center mt-10 text-xs text-gray-300'>
          <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
            {groupRows[0].map(row => renderSeats(row))}
          </div>

          <div className='grid grid-cols-2 gap-11'>
            {groupRows.slice(1).map((group, idx)=>(
              //  ["c","D"], ["E","F"]...
              <div key={idx}>
                {group.map(row => renderSeats(row))}
              </div>
            ))}
          </div>
        </div>

            <button onClick={()=> navigate('/my-bookings')} className='flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95'>
              Proceed to Checkout
              <ArrowRightIcon strokeWidth={3} className='w-4 h-4'/>
            </button>
      </div>
    </div>
  ):(
    <Loading/>
  )
}

export default SeatLayout