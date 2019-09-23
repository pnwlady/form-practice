import React from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const Occupancy = (props) => (
	<TextField
		className="form-select"
		select
		name={props.name}
		value={props.selectedOption}
		onChange={props.controlFunc}
		placeholder={props.placeholder}
		margin="normal"
	>
		{props.option.map(option => (
			<MenuItem value={option.value}>
				{option.label}
			</MenuItem>
		))}
	</TextField>
);

Occupancy.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.string,
	controlFunc: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default Occupancy;
