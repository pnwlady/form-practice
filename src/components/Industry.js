import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const industries = [
    {
        value: 'Beauty and Hair Styling Salon',
        label: 'Hair Salon',
      },
      {
        value: 'Nail Salons',
        label: 'Nail Salon',
      }
];

export default function Industry({handleChange, name}) {

  return (
    <TextField
		id="select-industry"
		select
		name={name}
		label="Industry"
		className={classes.textField}
		value={values.industry}
		ref={register({ required: true })} 
		placeholder="What's Industry are you in?"
		onChange={handleChange('industry')}
		// SelectProps={{
		// 	MenuProps: {
		// 	className: classes.menu,
		// 	},
		// }}
		helperText="Please select your industry"
		margin="normal"
		>
		{industries.map(option => (
			<MenuItem key={option.value} value={option.value}>
			{option.label}
			</MenuItem>
		))}
		</TextField>
  )}
  