// import React, { useState } from 'react';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Industry from '../components/Industry';
import Business from '../components/Business';
import Address from '../components/Address';
import Occupancy from '../components/Occupancy';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
//hooks can only be used in body of react functional component
const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

const FormContainer = () => {
		const formData = {
			industry: '',
			businessName: '',
			address: '',
			occupancy: ''
		};
		// // this.handleFormSubmit = this.handleFormSubmit.bind(this);
		// const [form, submitForm] = useState('');
		// // this.handleClearForm = this.handleClearForm.bind(this);
		// const [clear, clearForm] = useState('');
		// this.handleIndustrySelect = this.handleIndustrySelect.bind(this);
		const [industry, changeIndustry] = useState({
			name: 'Hair Salon',
			value: 'Beauty and Hair Styling Salon'
		});
		// this.handleBusinessNameChange = this.handleBusinessNameChange.bind(this);
		const [businessName, changeBusinessName] = useState('');
		// this.handleAddressChange = this.handleAddressChange.bind(this);
		const [address, changeAddress] = useState('');
		// this.handleOccupancySelect = this.handleOccupancySelect.bind(this);
		const [occupancy, changeOccupancy] = useState({
			name: 'Rent Chair, Office, or Space',
			value: 'LSCND'
		});

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const formPayload = {
			industry: industry,
			businessName: businessName,
			address: address,
			occupancy: occupancy
		};

		console.log('Send this in a POST request:', formPayload);
		handleClearForm(e);
	}

	const handleClearForm = (e) => {
		e.preventDefault();
		changeIndustry('');
		changeBusinessName('');
		changeAddress('');
		changeOccupancy('');
	};

	const handleIndustrySelect = (e) => {
		changeIndustry(e.target.value);
	};
	const handleBusinessNameChange = (e) => {
		changeBusinessName(e.target.value);
	};
	const handleAddressChange = (e) => {
		changeAddress(e.target.value);
	};
	const handleOccupancySelect = (e) => {
		changeOccupancy(e.target.value);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<Dialog open="true" aria-labelledby="form-dialog-title" fullScreen={fullScreen} >
				<DialogContent style={{ padding: '20px 30px' }} >
				<AppBar className="appBar">
					<DialogTitle>Get a Quote for your Salon</DialogTitle>
				</AppBar>
					<DialogContentText>Let's get you a quote -- just a couple questions for you.</DialogContentText>
					<Industry
						name={'industry'}
						placeholder={'Choose your Industry'}
						controlFunc={handleIndustrySelect}
						// options={industryOptions}
						// selectedOption={industrySelection} 
						/>
					<Business
						inputType={'text'}
						title={'Full name'}
						name={'businessName'}
						controlFunc={handleBusinessNameChange}
						content={businessName}
						placeholder={'Type first and last name here'} />
					<Address
						inputType={'text'}
						title={'Full Address'}
						name={'address'}
						controlFunc={handleAddressChange}
						content={address}
						placeholder={'Type full address: street, city, state, & zip code.'} />
					<Occupancy
						name={'occupancy'}
						placeholder={'Choose your Space'}
						controlFunc={handleOccupancySelect}
						// options={occupancyOptions}
						// selectedOption={occupancySelection} 
						/>
					<DialogActions>
					<Button
						className="btn btn-link float-left"
						onClick={this.handleClearForm}>Clear form</Button>
					<Button 
						type="submit"
						className="btn btn-primary float-right"
						value="Submit">Submit</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>
		</form>
	);
}

export default FormContainer;