import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { themeChange } from 'theme-change'


const Navbar = () => {
  useEffect(() => {
    themeChange(false)   
  }, [])
  return (
    <div>
    
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost text-xl">No Limit Buzz</a>
            </Link>
  </div>
        <div className="flex-none gap-2">
          
  <select className="select select-bordered w-full select-xs max-w-xs" data-choose-theme>
  <option disabled value="">
          Pick a theme
        </option>
        <option value="">Default</option>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
          </select>
          
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
