import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HomePage } from './containers'
import { GlobalStyles } from './styles'

const queryClient = new QueryClient()
const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
