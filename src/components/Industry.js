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

export default function Business() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    industry: ''
  });

  const handleChange = industry => event => {
    setValues({ ...values, [industry]: event.target.value });
  };

  return (
    <TextField
        id="select-industry"
        select
        label="Industry"
        className={classes.textField}
        value={values.industry}
        onChange={handleChange('industry')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
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
  