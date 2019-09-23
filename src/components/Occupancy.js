import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

// const occupancy = [
//     {
//         value: 'HMBUS',
//         label: 'Salon at your Home',
//       },
//       {
//         value: 'LSCND',
//         label: 'Rent Chair, Office, or Space',
//       },
//       {
//         value: 'OWNCND',
//         label: 'Own Office or Space',
//       },
//       {
//         value: 'LSBLD',
//         label: 'Rent Building',
//       },
//       {
//         value: 'OWBLD',
//         label: 'Own Building',
//       },
//       {
//         value: 'KSBUS',
//         label: 'Kiosk',
//       },
// ];

const Occupancy = (props) => (
	<TextField
		className="form-select"
		select
		name={props.name}
		value={props.selectedOption}
		onChange={props.controlFunc}
		label={props.label}
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
	name: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOption: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string
};

export default Occupancy;
