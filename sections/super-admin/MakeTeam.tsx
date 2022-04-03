import { FC, useState } from "react";
import { HiOutlineHome } from 'react-icons/hi'
import { Card, Onboarding } from "../../components";
import { SuperAdmin } from "../../layouts/SuperAdmin";
import { Onboarding1, Onboarding2 } from "./make-team";

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

export type MemberDetail = {
  id: string,
}

export type FormTeam = {
  team_photo: string,
  team_name: string,
  team_description: string,
  category: string,
  members: MemberDetail[],
}

export const MakeTeam: FC = () => {
  const [step, setStep] = useState<number>(1)
  const [form, setForm] = useState<FormTeam>({
    team_photo: '',
    team_name: '',
    team_description: '',
    category: '',
    members: [],
  })

  return (
    <SuperAdmin breadcrumb={breadcrumbList}>
      <Card>
        <Onboarding
          step={4}
          active={step}
        />

        <div className="py-8 px-4 w-full">
          <div className="w-1/2 mx-auto">
            {step === 1 && (
              <Onboarding1
                setStep={setStep} 
                form={form} 
                setForm={setForm}
              />
            )}
            {step === 2 && (
              <Onboarding2
                setStep={setStep} 
                form={form} 
                setForm={setForm}
              />
            )}
          </div>
        </div>
      </Card>
    </SuperAdmin>
  )
}