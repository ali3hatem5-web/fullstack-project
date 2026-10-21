import { useState } from 'react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)
  const [healthStatus, setHealthStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const checkHealth = async () => {
    setLoading(true)
    try {
      const res = await fetch('http://127.0.0.1:8000/api/health')
      const data = await res.json()
      setHealthStatus(JSON.stringify(data))
    } catch {
      setHealthStatus('Error connecting to backend')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 space-y-6 text-center border border-gray-100">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Fullstack App</h1>
          <p className="text-sm text-gray-500">React 19.3.1 + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui</p>
        </div>

        <div className="flex flex-col gap-3">
          <Button onClick={() => setCount((c) => c + 1)}>
            shadcn Button (Clicked {count} times)
          </Button>

          <Button variant="outline" onClick={checkHealth} disabled={loading}>
            {loading ? 'Checking...' : 'Check Backend Health (/api/health)'}
          </Button>
        </div>

        {healthStatus && (
          <div className="p-3 bg-gray-100 rounded-md text-xs font-mono break-all text-left">
            {healthStatus}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
