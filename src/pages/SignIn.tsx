import { FormEvent, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react'
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Checkbox } from "../components/Checkbox";
import { Logo } from "../Logo";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await fetch('/sessions', {
      method: 'POST',
      body: JSON.stringify({
         email: 'silva.souza.adriano@gmail.com',
        password: '123456'
      }),
    })

    setIsUserSignedIn(true)
  }
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size="lg" className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-[408px] mt-10'>
        { isUserSignedIn && <Text>Login realizado!</Text>}
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder='Digite seu e-mail'/>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder='*********************'/>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id="remember" />
          <Text size="sm" className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className='mt-4'>
          Entrar na plataforma
        </Button>

      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora</a>
        </Text>
      </footer>
    </div>
  )
}