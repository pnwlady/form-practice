import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 400,
  },
  dense: {
    marginTop: 20,
  }
}));

export default function Address() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    address: ''
  });

  const handleChange = address => event => {
    setValues({ ...values, [address]: event.target.value });
  };

  return (
    <TextField
        id="standard-address"
        label="Full Address"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('address')}
        placeholder={'Street Address, City, State, Zip Code'}
        margin="normal"
      />
  )}

