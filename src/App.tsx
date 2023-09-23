import { NamePhoneCard } from '@/components/ui'
import { FormValues } from '@/lib/validation.ts'

export const App = () => {
  const handleSignIn = (data: FormValues) => {
    console.log(data)
  }

  return (
    <main className="container">
      <NamePhoneCard onSubmit={handleSignIn} />
    </main>
  )
}
