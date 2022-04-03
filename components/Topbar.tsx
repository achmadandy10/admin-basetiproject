import Image from "next/image";
import { FC, useRef, useState } from "react";
import { HiChevronDown, HiMenu } from "react-icons/hi";
import { useClickOutside } from "../hooks";

export const Topbar: FC = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdown = useRef<HTMLDivElement>(null)
  
  useClickOutside(showDropdown, setShowDropdown, dropdown)
  
  const handleShowSidebar = () => {
    const sidebar = document.getElementById("sidebar")
    sidebar?.classList.toggle("hidden")
  }

  return (
    <div className="flex items-center justify-between">
      <div onClick={handleShowSidebar} className="rounded-full border hover:bg-gray-200 p-2 cursor-pointer">
        <HiMenu className="w-6 h-6"/>
      </div>

      <div ref={dropdown} className="flex items-center gap-3">
        <span className="text-md font-normal">Nama Akun</span>
        <div>
          <div onClick={() => setShowDropdown(d => !d)} className="flex items-center gap-1 cursor-pointer">
            <Image 
              src={"https://ui-avatars.com/api/?name=Achmad+Andybackground=random&color=fff"} 
              alt="Photo Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>
              <HiChevronDown/>
            </span>
          </div>

          {showDropdown && (
            <div className="absolute right-10 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <div className="py-3 px-4">
                <span className="block text-sm text-gray-900 dark:text-white">Nama Akun</span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@email.com</span>
              </div>
              <ul className="py-1" aria-labelledby="dropdown">
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}