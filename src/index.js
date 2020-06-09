import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'
import App from './containers/_app/App'
import './index.css'

ReactDOM.render(
  <Suspense fallback={""}>
    <App />
  </Suspense>,
  document.getElementById('root')
);

serviceWorker.unregister();
