import { useRouter } from 'next/router'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { HiLockClosed, HiUser } from 'react-icons/hi'
import { Button, Spinner } from '../components'
import { Label, TextInput } from '../components/form-controls'

export const LoginForm: FC = () => {
  const [store, setStore] = useState(false)
  const [form, setForm] = useState({
    username: '',
    password: '',
    error: [],
  })
  const router = useRouter()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const name = e.target.name
    const value = e.target.value
    
    setForm({ ...form, [name]: value })
  }

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStore(true)

    router.push('/dashboard')
  }
  
  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <div>
          <Label 
            className="mb-2 block" 
            htmlFor="username"
          >
            Username
          </Label>
          <TextInput
            id="username"
            name="username"
            onChange={ handleInputChange }
            type="text"
            placeholder="Enter your username"
            required={true}
            icon={HiUser}
          />
        </div>
        <div>
          <Label 
            className="mb-2 block" 
            htmlFor="password"
          >
            Password
          </Label>
          <TextInput
            id="password"
            name="password"
            onChange={ handleInputChange }
            type="password"
            placeholder="Enter your password"
            required={true}
            icon={HiLockClosed}
          />
        </div>
      </div>
      
      {store ? (
        <Button 
          className="w-full"
          color="dark"
        >
          <Spinner
            className="mr-3"
            size="sm"
            light={true}
            color="gray"
          />
          Loading ...
        </Button>
      ) : (
        <Button 
          className="w-full"
          color="dark"
          type="submit"
          disabled={ 
            (form.username && form.password ) === '' ? true : false 
          }
        >
          Login
        </Button>
      )}
    </form>
  )
}