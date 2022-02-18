import { BiHeartSquare } from 'react-icons/bi'
// import { MdAddBox } from 'react-icons/md'
import MenuItem from './MenuItem'

export default function MenuTwo() {
  return (
    <>
      {/* <MenuItem href='#' icon={<MdAddBox />} name='Create Playlist' /> */}
      <MenuItem href='#' icon={<BiHeartSquare />} name='Liked Songs' />
    </>
  )
}
