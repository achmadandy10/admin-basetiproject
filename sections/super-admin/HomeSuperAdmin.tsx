import Image from "next/image";
import { FC } from "react";
import { HiOutlineHome } from 'react-icons/hi'
import { Card } from "../../components";
import { SuperAdmin } from "../../layouts/SuperAdmin";
import Polygon from "../../public/Polygon.svg"

const breadcrumbList = [
  {
    icon: HiOutlineHome,
    label: 'Dashboard'
  },
]

export const HomeSuperAdmin: FC = () => {
  const date = new Date()
  const hours = date.getHours()

  var greating = ''

  if (hours >= 5 && hours <= 12) {
    greating = 'Good morning'   
  } else if (hours >= 12 && hours <= 18) {
    greating = 'Good afternoon'
  } else {
    greating = 'Good evening'
  }
  
  return (
    <SuperAdmin breadcrumb={breadcrumbList}>
      <div className="relative bg-gradient-to-r from-gray-200 to-gray-100 p-4 sm:p-6 rounded-lg overflow-hidden"> 
        <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true"> 
          <Image src={Polygon} alt="Greating Icon"/>
        </div> 
        <div className="relative"> 
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
            {greating}, Nama Akun. 👋
          </h1> 
          <p>Here is what’s happening with your projects today:</p> 
        </div> 
      </div>
      <Card>
        dashboard
      </Card>
    </SuperAdmin>
  )
}