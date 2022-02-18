import { useEffect, useState } from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import User from './User'

export default function TopBar({ hasSearchBar }) {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    offset > 20 ? setScrolled(true) : setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const stickyClass = 'fixed top-0 w-full'

  return (
    <header
      className={`${
        scrolled ? stickyClass : ''
      } flex justify-between px-8 py-8 mb-2 sticky top-0`}>
      <section className='flex items-center justify-between w-1/3'>
        <Navigation />
        {hasSearchBar ? <SearchBar /> : null}
      </section>
      <User />
    </header>
  )
}
