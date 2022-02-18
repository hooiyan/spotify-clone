import { RiUnsplashFill } from 'react-icons/ri'
import LandingImg from '../assets/images/landing-page.jpg'

const overlay = 'bg-black bg-opacity-60 w-full'

export default function LoginPage() {
  return (
    <div
      className='bg-fixed bg-center bg-no-repeat bg-cover text-center h-full w-full flex flex-col justify-center items-center'
      style={{ backgroundImage: `url(${LandingImg})` }}>
      <main
        className={`${overlay} h-full flex flex-col justify-center items-center z-50`}>
        <h1 className='text-white text-8xl md:text-7xl xs:m-16 xs:text-6xl xs:leading-snug font-bold mb-28'>
          Spotify Clone
        </h1>
        <a
          className='bg-spotifyGreen border-0 rounded-full text-white text-3xl xs:text-2xl font-bold py-8 lg:py-7 px-20 lg:px-16 sm:px-12 sm:py-5'
          href='http://localhost:4000/login'>
          Login to Spotify
        </a>
      </main>
      <footer
        className={`${overlay} text-gray-300 text-2xl pb-12 flex justify-center items-center`}>
        <RiUnsplashFill className='text-xl mr-2' />
        <>
          Photo by &nbsp;
          <a
            href='https://unsplash.com/@rexcuando'
            target='_blank'
            rel='noreferrer'
            className='text-white no-underline'>
            @rexcuando
          </a>
        </>
      </footer>
    </div>
  )
}
