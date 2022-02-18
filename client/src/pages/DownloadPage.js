import BasicLayout from '../layouts/BasicLayout'
import TopBar from '../components/Content/TopBar'
import DownloadImage from '../assets/images/download.png'

function View() {
  return (
    <section className='px-8'>
      <TopBar />
      <div className='flex flex-col items-center py-40 text-center'>
        <img src={DownloadImage} alt='spotify app mock-up' className='mb-20' />
        <h1 className='font-bold text-5xl mb-16'>Get Spotify free app</h1>
        <h2 className='font-semibold text-2xl mb-16'>
          Seamlessly listen to music you love. Download the app for your
          computer.
        </h2>
        <a
          href='https://www.spotify.com/us/download'
          target='_blank'
          rel='noreferrer'
          className='uppercase bg-spotifyGreen text-white rounded-full font-bold py-6 px-14 tracking-widest text-xl hover:underline hover:scale-50'>
          Download desktop app
        </a>
      </div>
    </section>
  )
}

export default function DownloadPage() {
  return <BasicLayout mainView={<View />} />
}
