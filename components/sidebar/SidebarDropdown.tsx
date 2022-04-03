import Link from "next/link";
import { useRouter } from "next/router";
import { ComponentProps, FC, useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

interface Dropdown {
  dropdownTitle: string,
  dropdownPath: string
}

export type SidebarDropdownProps = ComponentProps<'li'> & {
  title: string;
  icon?: FC<ComponentProps<'svg'>>;
  dropdown: Dropdown[]
};

export const SidebarDropdown: FC<SidebarDropdownProps> = ({
  title,
  icon: Icon,
  dropdown,
}) => {
  const [active, setActive] = useState(false)
  const router = useRouter()

  return (
    <li>
      <button onClick={() => setActive(!active)} type="button" className={`flex items-center p-2 w-full text-base font-normal text-gray-400 rounded-lg transition duration-75`}>
        {Icon && (
          <Icon className={`flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75`} />
        )}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{ title }</span>
        {!active ? (
          <HiChevronDown className="w-6 h-6"/>
        ) : (
          <HiChevronUp className="w-6 h-6"/>
        )}
      </button>
      <ul id="dropdown-example" className={`${!active && 'hidden'} py-2 space-y-2`}>
        {dropdown.map(({dropdownTitle, dropdownPath}, index) => {
          return (
            <li key={index}>
              <Link href={dropdownPath}>
                <a className={`${router.pathname === dropdownPath ? 'text-white bg-gray-700' : 'text-gray-400'} flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg transition duration-75 `}>{ dropdownTitle }</a>
              </Link>
            </li>    
          )
        })}
      </ul>
    </li>
  )
}