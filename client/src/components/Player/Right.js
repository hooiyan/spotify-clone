import { GiMicrophone } from 'react-icons/gi'
import {
  IoVolumeMediumOutline,
  // IoVolumeLowOutline,
  // IoVolumeMuteOutline,
} from 'react-icons/io5'
import { MdDevices } from 'react-icons/md'
import { RiPlayList2Fill } from 'react-icons/ri'

const icon = 'cursor-pointer ml-6 hover:text-white'

export default function Right() {
  return (
    <section className='flex items-center justify-end w-1/3'>
      <GiMicrophone className={`${icon} text-2xl`} />
      <RiPlayList2Fill className={`${icon} text-2xl`} />
      <MdDevices className={`${icon} text-2xl`} />
      <span className='volume-control flex items-center'>
        <IoVolumeMediumOutline className={`${icon} text-4xl`} />
        <span className='block bg-spotifyGrey rounded-lg cursor-pointer h-1 w-24 my-0 mr-0 ml-2 hover:bg-spotifyGreen' />
      </span>
    </section>
  )
}
