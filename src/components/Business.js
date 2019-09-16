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

export default function Business() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <TextField
        id="standard-name"
        label="Business Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />
  )}