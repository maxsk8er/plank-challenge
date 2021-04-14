import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import Notifications from './components/Notifications/Notifications';

ReactDOM.render(
  <Provider store={store}>
		<Notifications />
		<App />
	</Provider>,
  document.getElementById('root')
)
