import { HiOutlineDownload } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

export default function InstallApp() {
  return (
    <NavLink
      to='/download'
      activeClassName='downloadActiveLink'
      className='flex items-center bg-black text-xl text-spotifyGrey cursor-pointer font-semibold my-0 mx-4 p-4 sticky bottom-0 left-0 z-10 hover:text-white'>
      <HiOutlineDownload className='text-3xl mr-2' />
      <span>Install App</span>
    </NavLink>
  )
}
