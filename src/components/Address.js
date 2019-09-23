import React from "react";
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
	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	name: React.PropTypes.string.isRequired,
	controlFunc: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]).isRequired,
	placeholder: React.PropTypes.string,
};


export default Address;