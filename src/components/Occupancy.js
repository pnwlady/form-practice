import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: 50,
    width: 400,
  },
  // dense: {
  //   marginTop: 20,
  // },
  menu: {
    width: 400,
  },
}));

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

export default function Occupancy() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    industry: ''
  });

  const handleChange = occupancy => event => {
    setValues({ ...values, [occupancy]: event.target.value });
  };

  return (
    <TextField
        id="select-occupancy"
        select
        label="Type of Location"
        className={classes.textField}
        value={values.occupancy}
        onChange={handleChange('occupancy')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select location type"
        margin="normal"
      >
        {occupancy.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
  )}
