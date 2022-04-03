import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FC } from "react";
import { SidebarDropdown } from "./SidebarDropdown";
import { SidebarLink } from "./SidebarLink";

interface Dropdown {
  dropdownTitle: string
  dropdownPath: string
}

interface MenuProps {
  title: string
  path: string
  icon: FC<ComponentProps<'svg'>>
  dropdown?: Dropdown[]
}

export type SidebarProps = {
  title: string,
  image: string,
  menu: MenuProps[],
};

export const Sidebar: FC<SidebarProps> = ({ title, image, menu }) => {
  return (
    <aside className="w-64 h-auto" id="sidebar">
      <div className="h-full overflow-y-auto py-4 px-3 bg-gray-900 rounded-xl dark:bg-gray-800">
          <a className="flex items-center mb-5 bg-white rounded py-2 justify-center">
            <Image src={image} alt="Logo BaseTI" priority width={30} height={30}/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-3">{ title }</span>
          </a>
          <ul className="space-y-2">
            {menu.map(({title, path, icon, dropdown}, index) => {
              if (dropdown) {
                return (
                  <SidebarDropdown
                    key={index}
                    title={title}
                    icon={icon}
                    dropdown={dropdown}
                  />
                )
              } else {
                return (
                  <SidebarLink
                    key={index}
                    title={title}
                    path={path}
                    icon={icon}
                  />
                )
              }
            })}
          </ul>
      </div>
    </aside>
  )
}