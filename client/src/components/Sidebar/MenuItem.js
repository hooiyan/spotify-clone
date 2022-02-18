import { NavLink } from 'react-router-dom'

export default function MenuItem({ to, icon, name, isNav }) {
  return isNav ? (
    <NavLink
      exact
      to={to}
      activeClassName='activeLink'
      className='flex items-center cursor-pointer text-xl font-semibold mb-2 py-4 px-4 rounded-md hover:text-white'>
      <span className='text-3xl mr-5'>{icon}</span>
      {name}
    </NavLink>
  ) : (
    <a
      href={to}
      className='flex items-center cursor-pointer text-xl h-auto font-semibold mb-0 py-2 px-2 rounded-md hover:text-white'>
      <span className='text-5xl mr-5'>{icon}</span>
      <span>{name}</span>
    </a>
  )
}
