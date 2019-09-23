// import React, { useState } from 'react';
import React from 'react';
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
import Industry from './Industry';
import Business from './Business';
import Address from './Address';
import Occupancy from './Occupancy';
// import Phone from './Phone';
// import useForm from 'react-hook-form';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
  },
  appBar: {
    position: 'relative',
  },
  textField: {
	marginLeft: theme.spacing(2),
	width: 400
  },
  content: {
    marginLeft: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  }));

export default function FormDialog() {
    const classes = useStyles();

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    // const [open, setOpen] = React.useState(false);
  // const [open, setOpen] = useState(false);
  // function handleClickOpen() {
  //   setOpen(true);
  // }

  // function handleClose() {
  //   setOpen(false);
  // }

  // const [values, setValues] = useState({
  //   address: '',
  //   industry: '',
    
  // });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
//   const industries = [
//     {
//         value: 'Beauty and Hair Styling Salon',
//         label: 'Hair Salon',
//       },
//       {
//         value: 'Nail Salons',
//         label: 'Nail Salon',
//       }
//   ];
//   const occupancy = [
//     {
//         value: 'HMBUS',
//         label: 'Salon at your Home',
//       },
//       {
//         value: 'LSCND',
//         label: 'Rent Chair, Office, or Space',
//       },
//       {
//         value: 'OWNCND',
//         label: 'Own Office or Space',
//       },
//       {
//         value: 'LSBLD',
//         label: 'Rent Building',
//       },
//       {
//         value: 'OWBLD',
//         label: 'Own Building',
//       },
//       {
//         value: 'KSBUS',
//         label: 'Kiosk',
//       },
//   ];
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
       <form onSubmit={handleSubmit(onSubmit)}>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}> Open form dialog </Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullScreen={fullScreen} >
				<AppBar className={classes.appBar}> 
					<DialogTitle id="form-dialog-title">Get a Quote for your Salon</DialogTitle>
				</AppBar>
				<DialogContent style={{ padding: '20px 30px' }}>
					<DialogContentText> Let's get you a quote -- just a couple questions for you. </DialogContentText>
				
						<Industry 
							className={classes.textField}
							// value={values.industry}
							ref={register({ required: true })} 
							onChange={handleChange('industry')} /> 
							{errors.industry && 'field required'}

						<Business 
							 className={classes.textField}
							//  value={values.name}
							 ref={register({ required: true })} 
							 onChange={handleChange('businessname')} />
							 {errors.business && 'Business name is required.'}
				
						<Address    
							className={classes.textField}
							// value={values.address}
							ref={register({ required: true })} 
							onChange={handleChange('address')} />
							{errors.address && 'Street address, city and zip code are required.'}
						
						<Occupancy   
							className={classes.textField}
    						// value={values.occupancy}
    						ref={register({ required: true })}
							onChange={handleChange('occupancy')} />
							{errors.industry && 'field required'} 

				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose} color="primary"> Cancel </Button>
					<Button type="submit" onClick={handleSubmit} color="primary"> Get Quote </Button>
				</DialogActions>
        	</Dialog>
      </form>
    );
  }