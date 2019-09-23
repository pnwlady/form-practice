import React from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Address = props => (
	<TextField
		className="form-input"
		name={props.name}
		type={props.inputType}
		value={props.value}
		label={props.label}
		placeholder={'Street Address, City, Zip Code'}
		onChange={props.controlFunction}
		margin="normal"
	/>
);

Address.propTypes = {
	inputType: PropTypes.oneOf(['text', 'number']).isRequired,
	name: PropTypes.string.isRequired,
	controlFunc: PropTypes.func.isRequired,
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	placeholder: PropTypes.string,
};

export default Address;