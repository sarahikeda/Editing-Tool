import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
