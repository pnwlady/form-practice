import React, { useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import useForm from 'react-hook-form';

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingTop: theme.spacing(4),
  // },
  appBar: {
    position: 'relative',
  },
  content: {
    marginLeft: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  }));


function App() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const [values, setValues] = useState({
    address: '',
    industry: '',
    
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
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
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = data => {
     
      console.log(data);
      // 1. Parse address
      // 2. Build BOP
      // 3. Make api calls
      // 4. Display results or alternative option
      setOpen(false);
    };

  return (
    <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}> Open form dialog </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullScreen={fullScreen} >
            <AppBar className={classes.appBar}> 
            <DialogTitle id="form-dialog-title">Get a Quote for your Salon</DialogTitle>
            </AppBar>
            <DialogContent style={{ padding: '20px 30px' }}>
              <DialogContentText> Let's get you a quote -- just a couple questions for you. </DialogContentText>
              <TextField
                id="select-industry"
                select
                name="industry"
                label="Industry"
                className={classes.textField}
                value={values.industry}
                ref={register({ required: true })} 
                placeholder="What's Industry are you in?"
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
              </TextField>{errors.industry && 'Street address, city and zip code are required.'}

              <TextField
                id="standard-name"
                name="business"
                label="Business Name"
                className={classes.textField}
                value={values.name}
                ref={register({ required: true })} 
                placeholder="What's the name of your business?"
                onChange={handleChange('name')}
                margin="normal"
              />{errors.business && 'First name is required.'}
              <TextField
                id="standard-address"
                name="address"
                label="Full Address"
                className={classes.textField}
                value={values.address}
                ref={register({ required: true })} 
                onChange={handleChange('address')}
                placeholder={'Street Address, City, Zip Code'}
                margin="normal"
              />{errors.address && 'Street address, city and zip code are required.'}
              <TextField
                id="select-occupancy"
                select
                name="occupancy"
                label="Type of Location"
                className={classes.textField}
                value={values.occupancy}
                ref={register({ required: true })}
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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary"> Cancel </Button>
                <Button type="submit" onClick={handleSubmit} color="primary"> Get Quote </Button>
            </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}

export default App;
