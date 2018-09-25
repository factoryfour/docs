import React from 'react';
import ReactDOM from 'react-dom';

import Documenter from './components/Documenter.jsx';
import accounts from './blueprints/accounts.apib';

ReactDOM.render(
	(<div>
		<h1>Documentation</h1>
		<Documenter blueprint={accounts} />
	</div>),
	document.getElementById('app')
);
