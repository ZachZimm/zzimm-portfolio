import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className="w-screen h-screen bg-[var(--color-muted)] gap-2em flex justify-center">
      <div className="flex justify-center items-center h-full">
        <Card className="flex flex-col bg-[var(--color-background)]">
          <div className="flex justify-center flex-row">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        <Button onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
        <h1>Vite + React</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
      </Card>
      <Card className="flex flex-col bg-[var(--color-background)]">
        <div className="flex justify-center flex-row">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      <Button onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
      <h1>Vite + React</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
    </div>
  </body>
  )
}

export default App
