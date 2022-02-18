import React, { useEffect, useRef, useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import ImagePlaceholder from '../../../assets/images/landing-page.jpg'
import Dropdown from './Dropdown'

export default function User() {
  const dropdownRef = useRef(null)
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    const isOutside = (e) => {
      // if the dropdown is open and the clicked target is not within the menu, then close the menu
      if (
        dropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdown(false)
      }
    }

    document.addEventListener('mousedown', isOutside)

    return () => {
      // cleanup the event listener
      document.removeEventListener('mousedown', isOutside)
    }
  }, [dropdown])

  const icon = 'mr-4 lg:hidden'

  return (
    <aside
      className='flex flex-col'
      onClick={() => setDropdown((dropdown) => !dropdown)}
      ref={dropdownRef}>
      <div
        className={`${
          dropdown ? 'bg-spotifyDarkGrey' : ''
        } flex items-center bg-black rounded-full text-white cursor-pointer mb-4 p-1 hover:bg-spotifyDarkGrey`}>
        <img
          className='rounded-full h-12 w-12 mr-4 lg:mr-0'
          src={ImagePlaceholder}
          alt='User profile'
        />
        <span className='text-xl font-semibold mr-4 lg:hidden'>
          HooiYan Hoe
        </span>
        {dropdown ? (
          <AiFillCaretUp className={`${icon}`} />
        ) : (
          <AiFillCaretDown className={`${icon}`} />
        )}
      </div>
      {dropdown ? <Dropdown /> : null}
    </aside>
  )
}
