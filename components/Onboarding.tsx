import { FC } from "react"

type OnboardingProps = {
  step: number,
  active: number
}

export const Onboarding: FC<OnboardingProps> = ({
  step,
  active,
}) => {
  var rows = []

  for (let index = 0; index < step; index++) {
    rows.push(index+1)
  }

  return (
    <div className="px-4 pt-12 pb-8">
      <div className="my-auto w-1/2 mx-auto">
        <div className="relative">
          <div className="absolute left-0 top-1/2 -mt-[1px] w-full h-[0.125rem] bg-gray-300" aria-hidden="true"></div>
          <ul className="relative flex justify-between w-full">
            {rows.map((v, index) => {
              return (
                <li key={index}>
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full text-md font-semibold ${v <= active ? 'bg-black text-white' : 'bg-gray-200 text-slate-500'}`}>{v}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}