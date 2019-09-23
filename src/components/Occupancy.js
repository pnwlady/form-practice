import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const occupancy = [
    {
        value: 'HMBUS',
        label: 'Salon at your Home',
      },
      {
        value: 'LSCND',
        label: 'Rent Chair, Office, or Space',
      },
      {
        value: 'OWNCND',
        label: 'Own Office or Space',
      },
      {
        value: 'LSBLD',
        label: 'Rent Building',
      },
      {
        value: 'OWBLD',
        label: 'Own Building',
      },
      {
        value: 'KSBUS',
        label: 'Kiosk',
      },
];

export default function Occupancy({ handleChange, name }) {

  return (
    <TextField
      id="select-occupancy"
      select
      name={name}
      label="Type of Location"
      // SelectProps={{
      //   MenuProps: {
      //     className: classes.menu,
      //   },
      // }}
      helperText="Please select location type"
      onChange={handleChange('occupancy')}
      margin="normal"
    >
    {occupancy.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
  )}
