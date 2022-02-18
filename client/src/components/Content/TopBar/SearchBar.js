import { IoSearchOutline } from 'react-icons/io5'

export default function SearchBar() {
  return (
    <section className='ml-12 py-8 pl-8 rounded-full bg-white flex items-center h-16 w-10/12'>
      <IoSearchOutline className='absolute text-black text-4xl cursor-text' />
      <input
        className='rounded-full h-16 w-10/12 ml-8 p-8 text-black focus:outline-none text-2xl font-medium'
        placeholder='Artists, songs or podcasts'
      />
    </section>
  )
}
