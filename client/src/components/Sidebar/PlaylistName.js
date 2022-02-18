export default function PlaylistName({ name }) {
  return (
    <li className='text-xl font-normal hover:text-white cursor-pointer mb-6 mx-4 textOverflow'>
      {name}
    </li>
  )
}
