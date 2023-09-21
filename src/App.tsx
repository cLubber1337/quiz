import { Button, Card } from '@/components/ui'

export const App = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}
    >
      <Card>
        <Button variant={'primary'}>Далее</Button>
      </Card>
    </div>
  )
}
