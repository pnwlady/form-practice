import React, { useState } from "react";
import PropTypes from 'prop-types';
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

const Occupancy = (props) => {
	const [values, setValues] = useState({
		name: 'Hair Salon',
		value: 'Beauty and Hair Styling Salon',
	  });

	const changeOccupancy = event => {
		setValues(oldValues => ({
		  ...oldValues,
		  [event.target.name]: event.target.value,
		}));
	  };
	  
  return (
    <Select
        className="form-select"
		value={values.value}
		name={values.name}
        onChange={changeOccupancy}
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
  )
}
	
Occupancy.propTypes = {
  	name: PropTypes.string.isRequired,
  	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string
};

export default Occupancy;
