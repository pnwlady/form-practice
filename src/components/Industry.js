import React from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const Industry = (props) => (
	<TextField
		className="form-select"
		select
		name={props.name}
		value={props.selectedOption}
		onChange={props.controlFunc}
		helperText={props.placeholder}
		margin="normal"
		>
		<MenuItem value="Beauty and Hair Styling Salon" selected={true} >Hair Salon</MenuItem>
		<MenuItem value="Nail Salons">Nail Salon</MenuItem>
	</TextField>
);

Industry.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.string,
	controlFunc: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default Industry;
