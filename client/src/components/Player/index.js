import Left from './Left'
import Middle from './Middle'
import Right from './Right'

export default function Player() {
  return (
    <footer className='flex justify-between items-center bg-spotifyCardBlack text-spotifyGrey h-10-percent w-full py-12 px-8'>
      <Left />
      <Middle />
      <Right />
    </footer>
  )
}
