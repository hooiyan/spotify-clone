import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const icon = 'cursor-pointer text-white text-5xl rounded-full bg-gray-800'

export default function Navigation() {
  return (
    <section className='flex'>
      <RiArrowLeftSLine className={`${icon} mr-3`} />
      <RiArrowRightSLine className={`${icon} ml-3`} />
    </section>
  )
}
