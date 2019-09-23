import React from "react";
import TextField from '@material-ui/core/TextField';

export default function Business({ handleChange, name }) {

  return (
    <TextField
    id="standard-name" 
    name={name}
    label="Business Name"
    placeholder="What's the name of your business?"
    onChange={handleChange('businessname')}
    margin="normal"
  />
  )}