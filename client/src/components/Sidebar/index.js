import SpotifyIcon from './SpotifyLogo'
import MenuContainer from './MenuContainer'
import Playlist from './Playlist'
import InstallApp from './InstallApp'

export default function Sidebar() {
  return (
    <section className='justify-between bg-black text-spotifyGrey text-2xl max-w-md w-1/3 relative overflow-hidden'>
      <section className='py-8 px-6 flex flex-col h-full'>
        <SpotifyIcon />
        <MenuContainer />
        <hr className='border-0 h-px bg-spotifyDarkGrey my-8 mx-4' />
        <Playlist />
      </section>
      <InstallApp />
    </section>
  )
}
