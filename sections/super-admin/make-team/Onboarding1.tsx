import { ChangeEvent, FC } from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../../../components"
import { TextInput } from "../../../components/form-controls"

export type OnboardingProps = {
  setStep: any,
  form: any,
  setForm: any,
}

export const Onboarding1: FC<OnboardingProps> = ({
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
      <h1 className="text-3xl text-slate-800 font-bold mb-6">Please enter team name ✨</h1>
      <form>
        <TextInput
          name="team_name"
          value={form.team_name}
          onChange={ handleInputChange }
          type="text"
          required={true}
          addonRight="Team"             
        />
        <div className="mt-5 flex items-center justify-end">
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