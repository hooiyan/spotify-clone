import { FiExternalLink } from 'react-icons/fi'

const dropdownLink =
  'cursor-default text-spotifyGrey font-medium p-4 no-underline text-xl hover:text-white hover:bg-white hover:bg-opacity-10 hover:rounded-md'

export default function Dropdown() {
  return (
    <div className='flex flex-col bg-spotifyDarkGrey rounded-md p-2 absolute top-24 right-8 w-80 z-10'>
      <span className={`${dropdownLink} flex justify-between items-center`}>
        <a href='#account'>Account</a>
        <FiExternalLink />
      </span>
      <a className={`${dropdownLink}`} href='#profile'>
        Profile
      </a>
      <a className={`${dropdownLink}`} href='#logout'>
        Log out
      </a>
    </div>
  )
}
