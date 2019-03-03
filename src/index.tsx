// Components:
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'babel-polyfill'

// Pages:
import Home from './pages/Home'
import { Testing } from 'pages/Testing'

// Context:
import { AppProvider } from 'context/appContext'

// Service Worker
import registerServiceWorker from './registerServiceWorker'

// Styles:
import '../node_modules/tt-react-ui-2/build/index.css'
import './styles.css'

// ================================================================================================

ReactDOM.render(
  <AppProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Testing} />
      </Switch>
    </Router>
  </AppProvider>,
  document.getElementById('root')
)

registerServiceWorker()
