import React from "react";
import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const occupancies = [
    {
        value: 'HMBUS',
        name: 'Salon at your Home',
      },
      {
        value: 'LSCND',
        name: 'Rent Chair, Office, or Space',
      },
      {
        value: 'OWNCND',
        name: 'Own Office or Space',
      },
      {
        value: 'LSBLD',
        name: 'Rent Building',
      },
      {
        value: 'OWBLD',
        name: 'Own Building',
      },
      {
        value: 'KSBUS',
        name: 'Kiosk',
      },
];

const Occupancy = (props) => (
	<Select
		className="form-select"
		value={props.occupancy.value}
		name={props.occupancy.name}
		// value={props.selectedOption}
		onChange={props.controlFunc}
		helperText={props.placeholder}
		margin="normal"
		inputProps={{
            name: 'name',
            id: 'occupancy-select',
          }}
		>
		{occupancies.map(option => (
          <MenuItem value={option.value}>
            {option.name}
          </MenuItem>
        ))}
	</Select>
		{/* <MenuItem value="HMBUS">Salon at your Home</MenuItem>
		<MenuItem value="LSCND" selected={true} >Rent Chair, Office, or Space</MenuItem>
		<MenuItem value="OWNCND">Own Office or Space</MenuItem>
		<MenuItem value="LSBLD">Rent Building</MenuItem>
		<MenuItem value="OWBLD">Own Building</MenuItem> */}
);

Occupancy.propTypes = {
	name: PropTypes.string.isRequired,
	// options: PropTypes.array.isRequired,
	// selectedOption: PropTypes.string,
	controlFunc: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default Occupancy;
