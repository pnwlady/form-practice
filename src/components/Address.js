import React from "react";
import TextField from '@material-ui/core/TextField';

export default function Address({handleChange, name }) {

  return (
    <TextField
    id="standard-address"
    name={name}
    label="Full Address"
    placeholder={'Street Address, City, Zip Code'}
    onChange={handleChange('address')}
    margin="normal"
  />
  )}

