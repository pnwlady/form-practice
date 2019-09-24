import React from "react";
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const industries = [
    {
        value: 'Beauty and Hair Styling Salon',
        name: 'Hair Salon',
      },
      {
        value: 'Nail Salons',
        name: 'Nail Salon',
      }
];
const Industry = (props) => (
	<Select
		className="form-select"
		value={industries.value}
		name={industries.name}
		// value={props.selectedOption}
		onChange={props.controlFunc}
		helperText={props.placeholder}
		margin="normal"
		inputProps={{
            name: 'name',
            id: 'industry-select',
          }}
		>
		{industries.map(option => (
          <MenuItem value={option.value}>
            {option.name}
          </MenuItem>
        ))}
	</Select>
);

Industry.propTypes = {
	name: PropTypes.string.isRequired,
	// options: PropTypes.array.isRequired,
	// selectedOption: PropTypes.string,
	controlFunc: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default Industry;
