import { FC } from "react"
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi"
import { Breadcrumb, BreadcrumbItem, Topbar } from "../components"
import { Sidebar } from "../components/sidebar"
import Logo from "../public/Logo.svg"

const SuperAdminMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: HiOutlineHome
  },
  {
    title: "Team",
    path: "#",
    icon: HiOutlineUserGroup,
    dropdown: [
      { 
        dropdownTitle: "Make Team", 
        dropdownPath: "/make-team" 
      },
      { 
        dropdownTitle: "List Team", 
        dropdownPath: "/list-team" 
      },
    ]
  },
]

export type SuperAdminProps = {
  breadcrumb: BreadcrumbItem[]
}

export const SuperAdmin: FC<SuperAdminProps> = ({children, breadcrumb}) => {
  return (
    <div className="flex p-2 h-screen">
      <Sidebar
        title={"BaseTI"}
        image={Logo}
        menu={SuperAdminMenu}
      />
      <div className="px-10 py-5 w-full">
        <Topbar/>
        <div className="flex flex-col gap-5 mt-5">
          <Breadcrumb
            items={breadcrumb}
          />
          {children}
        </div>
      </div>
    </div>
  )
}