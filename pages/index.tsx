import type { NextPage } from 'next'
import Image from 'next/image'
import { Card } from '../components'
import { LoginForm } from '../sections/LoginForm'
import Logo from '../public/Logo.svg'

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen px-5">
      <Card className="max-w-md">
        <Image src={ Logo } alt="Logo BaseTI" width={60} height={60} priority/>
        <h1 className="text-center text-2xl font-bold mb-5">BaseTI Project</h1>
        <LoginForm />
      </Card>
    </div>
  )
}

export default Home
