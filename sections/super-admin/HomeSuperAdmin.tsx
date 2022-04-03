import { FC } from "react";
import { HiOutlineHome } from 'react-icons/hi'
import { Card } from "../../components";
import { SuperAdmin } from "../../layouts/SuperAdmin";

const breadcrumbList = [
  {
    icon: HiOutlineHome,
    label: 'Dashboard'
  },
]

export const HomeSuperAdmin: FC = () => {
  return (
    <SuperAdmin breadcrumb={breadcrumbList}>
      <Card>
        dashboard
      </Card>
    </SuperAdmin>
  )
}