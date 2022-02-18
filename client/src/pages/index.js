import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import LibraryPage from './LibraryPage'
import DownloadPage from './DownloadPage'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/collection/playlists' component={LibraryPage} />
        <Route path='/download' component={DownloadPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}
