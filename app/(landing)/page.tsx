import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="p-2">
      <Button>Landing</Button>
      <ModeToggle />
    </main>
  )
}
