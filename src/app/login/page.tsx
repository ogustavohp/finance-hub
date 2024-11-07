import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { LogInIcon } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const { userId } = await auth()
  if (userId) {
    redirect('/')
  }
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-xl flex-col justify-center p-8">
        <Image
          src={'/logo.svg'}
          width={173}
          height={39}
          alt="finance hub"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance Hub é uma plataforma de gestão financeira que utiliza IA
          para monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant={'outline'}>
            <LogInIcon />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={'/login.png'}
          alt="imagem do projeto"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
