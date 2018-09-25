import React from 'react';
import PropTypes from 'prop-types';
import drafter from 'drafter.js';

class Documenter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			initialized: false,
		};
	}

	componentDidUpdate(prevProps) {
	}

	render() {
		return (<div>Documenter</div>);
	}
}

Documenter.propTypes = {
	name: PropTypes.string.isRequired,
	blueprint: PropTypes.string.isRequired,
};

export default Documenter;
