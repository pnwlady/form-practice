import React from "react";
import TextField from '@material-ui/core/TextField';
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

export default function Phone() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    phone: ''
  });

  const handleChange = phone => event => {
    setValues({ ...values, [phone]: event.target.value });
  };

  return (
    <TextField
        id="standard-phone"
        label="Phone Number"
        className={classes.textField}
        value={values.phone}
        onChange={handleChange('phone')}
        placeholder={'0000000000'}
        margin="normal"
      />
  )}