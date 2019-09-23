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
		helperText={props.placeholder}
		margin="normal"
	>	
		<MenuItem value="HMBUS">Salon at your Home</MenuItem>
		<MenuItem value="LSCND" selected={true} >Rent Chair, Office, or Space</MenuItem>
		<MenuItem value="OWNCND">Own Office or Space</MenuItem>
		<MenuItem value="LSBLD">Rent Building</MenuItem>
		<MenuItem value="OWBLD">Own Building</MenuItem>
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
