import Placehoder from '../../../assets/images/landing-page.jpg'

export default function ColorfulCard({ isSquare }) {
  return isSquare ? (
    <a
      href='https://google.com'
      className='block bg-indigo-700 rounded-xl p-8 h-80 w-80 relative overflow-hidden'>
      <h3 className='text-4xl font-bold'>Title</h3>
      <img
        className='object-cover h-44 w-44 absolute -right-8 bottom-0 transform rotate-20'
        src={Placehoder}
        alt='cover'
      />
    </a>
  ) : (
    <a
      href='https://google.com'
      className='block bg-purple-700 rounded-xl p-8 h-80 w-200 relative overflow-hidden'>
      <h3 className='text-5xl font-bold'>Title</h3>
      <img
        className='object-cover h-44 w-44 absolute -right-8 bottom-0 transform rotate-20'
        src={Placehoder}
        alt='cover'
      />
    </a>
  )
}
