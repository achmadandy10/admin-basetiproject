import { ChangeEvent, FC } from "react"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../../../components"
import { TextInput } from "../../../components/form-controls"
import { OnboardingProps } from "./Onboarding1"

export const Onboarding2: FC<OnboardingProps> = ({
  setStep,
  form,
  setForm,
}) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const name = e.target.name
    const value = e.target.value
    
    setForm({ ...form, [name]: value })
  }

  return (
    <>
      <h1 className="text-3xl text-slate-800 font-bold mb-6">Add Member ✨</h1>
      <form>
        <TextInput
          name="team_name"
          onChange={ handleInputChange }
          type="text"
          required={true}
          addonRight="Team"             
        />
        <div className="mt-5 flex items-center justify-end gap-1">
          <Button
            type="submit"
            color="light"
            onClick={() => setStep(1)}
          >
            <HiArrowNarrowLeft className="mr-2 h5-w-5"/>
            Back
          </Button>

          <Button
            type="submit"
            color="dark"
            disabled={form.team_name === '' ? true : false}
            onClick={() => setStep(2)}
          >
            Next 
            <HiArrowNarrowRight className="ml-2 h5-w-5"/>
          </Button>
        </div>
      </form>
    </>
  )
}