import { RiHeartLine } from 'react-icons/ri'
import Placeholder from '../../assets/images/landing-page.jpg'

export default function Left() {
  return (
    <section className='flex items-center text-2xl w-1/3'>
      <img
        className='cursor-pointer h-14 w-14 mr-6'
        src={Placeholder}
        alt='Album cover'
      />
      <section>
        <p className='text-white cursor-pointer mb-1 mr-6 hover:underline'>
          Inside the Lines
        </p>
        <p className='cursor-pointer text-xl hover:underline'>
          Mike Perry, Casso
        </p>
      </section>
      <RiHeartLine className='cursor-pointer text-4xl hover:text-white' />
    </section>
  )
}
