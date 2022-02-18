import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi'
import {
  IoShuffle,
  IoRepeat,
  IoPlayCircleOutline,
  // IoPauseCircleOutline,
} from 'react-icons/io5'

const icon = 'cursor-pointer hover:text-white'

export default function Middle() {
  return (
    <section className='flex flex-col justify-center w-1/2'>
      <section className='top flex items-center justify-between mt-0 mx-auto mb-4 w-72'>
        <IoShuffle className={`${icon} text-3xl`} />
        <BiSkipPrevious className={`${icon} text-4xl`} />
        <IoPlayCircleOutline className={`${icon} text-6xl`} />
        <BiSkipNext className={`${icon} text-4xl`} />
        <IoRepeat className={`${icon} text-3xl`} />
      </section>
      <section className='bottom flex items-center text-xl'>
        <span className='start-time'>0:13</span>
        <span className='timeline block bg-spotifyGrey rounded-lg cursor-pointer h-1.5 w-full my-0 mx-4' />
        <span className='end-time'>4:45</span>
      </section>
    </section>
  )
}
