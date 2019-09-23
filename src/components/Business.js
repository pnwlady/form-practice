import React from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Business = props => (
	<TextField
		className="form-input"
		name={props.name}
		label={props.label}
		value={props.value}
		onChange={props.controlFunc}
		placeholder="What's the name of your business?"
		margin="normal"
	/>
);

Business.propTypes = {
	inputType: PropTypes.oneOf(['text', 'number']).isRequired,
	name: PropTypes.string.isRequired,
	controlFunc: PropTypes.func.isRequired,
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	placeholder: PropTypes.string,
};

export default Business;