import { IoSearchOutline } from 'react-icons/io5'
import { VscHome, VscLibrary } from 'react-icons/vsc'
import MenuItem from './MenuItem'

export default function MenuOne() {
  return (
    <nav className='mb-9'>
      <ul>
        <li>
          <MenuItem isNav to='/' icon={<VscHome />} name='Home' />
        </li>
        <li>
          <MenuItem
            isNav
            to='/search'
            icon={<IoSearchOutline />}
            name='Search'
          />
        </li>
        <li>
          <MenuItem
            isNav
            to='/collection/playlists'
            icon={<VscLibrary />}
            name='Your Library'
          />
        </li>
      </ul>
    </nav>
  )
}
