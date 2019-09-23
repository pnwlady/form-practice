import React from "react";
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
	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	name: React.PropTypes.string.isRequired,
	controlFunc: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]).isRequired,
	placeholder: React.PropTypes.string,
};

export default Business;