import React, { useEffect, useState } from 'react'
import Title from '../../components/admin/Title'
import { dummyShowsData } from '../../assets/assets'
import Loading from '../../components/Loading'
import {CheckIcon, DeleteIcon, StarIcon} from 'lucide-react'
import { KConverter } from '../../lib/KConverter'

function AddShows() {

  const currency = import.meta.env.VITE_CURRENCY
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [selectedMovie, setselectedMovie] = useState(null)
  const [dateTimeselection, setDateTimeselection] = useState([])//selected dtae/time slots
  const [dateTimeInput, setDateTimeInput] = useState("")
  const [showPrice, setShowPrice] = useState("")

  const fetchNowPlayingMovies = async () => {
    setNowPlayingMovies(dummyShowsData)
  }

  const handleDateTimeAdd = ()=>{
    if(!dateTimeInput) return
    const [date, time] = dateTimeInput.split("T")//The datetime input value looks like "2025-06-30T14:30"
    if(!date || !time) return //If either part is missing, do nothing.

    // date = "2025-06-30"
    // time = "14:30"

    setDateTimeselection((prev)=>{
      const times = prev[date] || []//Check if this date already exists in state. If yes, get its times array
      if(!times.includes(time)){//1 date pe 2 3 time pe shows ho skte
        return{ ...prev, [date]: [...times,time]}//If the time is not already added, add it
      }
      return prev
    })
  }

//   {
//   "2025-06-30": ["14:30", "18:00"],
//   "2025-07-01": ["10:00"]
//    }

  const handleRemoveTime = (date, time) =>{
    setDateTimeselection((prev)=>{
      const filteredTimes = prev[date].filter((t)=> t !== time)//Removes the specific time from that date's array by keeping everything except the matching time.
      if(filteredTimes.length === 0){
        const { [date]: _, ...rest} = prev//If no times remain for that date, remove the entire date key from state. 
        return rest//// _ is discarded, rest has everything else
      }
      return{...prev,[date]: filteredTimes}//filtered array
    })
  }
  useEffect(() => {
    fetchNowPlayingMovies()
  }, [])

  return nowPlayingMovies.length > 0 ? (
    <>
      <Title text1='Add ' text2='Shows' />
      <p className='mt-10 text-lg font-medium'>Now Playing Movies</p>
      <div className='overflow-x-auto pb-4'>
        <div className='group flex flex-wrap gap-4 mt-4 w-max'>
          {nowPlayingMovies.map((movie) => (
            <div key={movie.id} className='relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:-translate-y-1 transition duration-300'
            onClick={()=> setselectedMovie(movie.id)}>
              <div className='relative rounded-lg overflow-hidden'>
                <img src={movie.poster_path} alt='' className='w-full object-cover brightness-90' />
                <div className='text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0'>
                  <p className='flex items-center gap-1 text-gray-400'>
                    <StarIcon className='w-4 h-4 text-primary fill-primary' />
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p className='text-gray-300'>{KConverter(movie.vote_count)}Votes</p>
                </div>
              </div>
                {selectedMovie === movie.id && (
                  <div className='absolute top-2 right-2 flex items-center justify-center bg-primary h-6 w-6 rounded'>
                    <CheckIcon className='w-4 h-4 text-white' strokeWidth={2.5}/>
                  </div> 
                )}
                <p className='font-medium truncate'>{movie.title}</p>
                <p className='text-gray-400 text-sm'>{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8'>
        <label className='block text-sm font-medium mb-2'>Show Price</label>
        <div className='inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md'>
          <p className='text-gray-400 text-sm'>{currency}</p>
          <input min={0} type='number' value={showPrice} 
          onChange={(e)=> setShowPrice(e.target.value)} placeholder="Enter show Price'"
          className='outline-none'/>
        </div>
      </div>

      <div className='mt-6'>
        <label className='block text-sm font-medium mb-2'>Select Date and Time</label>
        <div className='inline-flex gap-5 border border-gray-600 p-1 pl-3 rounded-lg'>
          <input type='datetime-local' value={dateTimeInput} 
          onChange={(e)=> setDateTimeInput(e.target.value)} 
          className='outline-none rounded-md'/>
          <button onClick={handleDateTimeAdd} className='bg-primary/80 text-white px-3 py-2 text-sm rounded-lg hover:bg-primary cursor-pointer'>Add Time</button>
        </div>
      </div>

      {Object.keys(dateTimeselection).length>0 && (
        <div className='mt-6'>
          <h2 className='mb-2'>Selected Date-Time</h2>
          <ul className='space-y-3'>
            {Object.entries(dateTimeselection).map(([date, times])=>(
              <li key={date}>
                <div className='font-medium'>
                  <div className='flex flex-wrap gap-2 mt-1 text-sm'>
                    {times.map((time)=>(
                      <div key={time} className='border border-primary px-2 py-1 flex items-center rounded'>
                        <span>{time}</span>
                        <DeleteIcon onClick={()=> handleRemoveTime(date,time)} className='ml-2 text-red-500 hover:text-red-700 cursor-pointer'/>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className='bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer'>Add Show</button>
    </>
  ) : (
    <Loading />
  )
}

export default AddShows