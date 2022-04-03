import { FC } from "react";
import { HiOutlineHome } from 'react-icons/hi'
import { Card } from "../../components";
import { SuperAdmin } from "../../layouts/SuperAdmin";

const breadcrumbList = [
  {
    href: '/dashboard',
    icon: HiOutlineHome,
    label: 'Dashboard'
  },
  {
    label: 'Make Team'
  },
]

export const ListTeam: FC = () => {
  return (
    <SuperAdmin breadcrumb={breadcrumbList}>
      <Card>
        List Team
      </Card>
    </SuperAdmin>
  )
}