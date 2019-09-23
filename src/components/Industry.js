import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

// const industries = [
//     {
//         value: 'Beauty and Hair Styling Salon',
//         label: 'Hair Salon',
//       },
//       {
//         value: 'Nail Salons',
//         label: 'Nail Salon',
//       }
// ];

const Industry = (props) => (
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



Industry.propTypes = {
	name: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOption: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string
};

export default Industry;
