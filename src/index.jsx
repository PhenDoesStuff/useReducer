import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AuthContext from './store/auth-content';

ReactDOM.render(
	<AuthContext.Provider>
		<App />
	</AuthContext.Provider>,
	document.getElementById('root')
);
