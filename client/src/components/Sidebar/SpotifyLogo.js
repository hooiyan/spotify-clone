import { MdLibraryMusic } from 'react-icons/md'

export default function SpotifyIcon() {
  return (
    <aside className='flex items-center text-white cursor-pointer text-3xl font-bold mb-10 pl-4'>
      <span className='text-5xl mr-2'>
        <MdLibraryMusic />
      </span>
      Spotify
    </aside>
  )
}
