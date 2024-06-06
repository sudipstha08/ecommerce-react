import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HomePage } from './containers'
import { GlobalStyles } from './styles'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </QueryClientProvider>
    </div>
  )
}

export default App
