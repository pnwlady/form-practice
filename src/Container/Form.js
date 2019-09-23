// import React, { useState } from 'react';
import React from 'react';
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

//   const industryOptions = [
//     {
//         value: 'Beauty and Hair Styling Salon',
//         name: 'Hair Salon',
//       },
//       {
//         value: 'Nail Salons',
//         name: 'Nail Salon',
//       }
//   ];
//   const occupancySelection = [
//     {
//         value: 'HMBUS',
//         name: 'Salon at your Home',
//       },
//       {
//         value: 'LSCND',
//         name: 'Rent Chair, Office, or Space',
//       },
//       {
//         value: 'OWNCND',
//         name: 'Own Office or Space',
//       },
//       {
//         value: 'LSBLD',
//         name: 'Rent Building',
//       },
//       {
//         value: 'OWBLD',
//         name: 'Own Building',
//       },
//       {
//         value: 'KSBUS',
//         name: 'Kiosk',
//       },
//   ];

class FormDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      		industrySelection: '',
			businessName: '',
			address: '',
			occupancySelection: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    	this.handleClearForm = this.handleClearForm.bind(this);
    	this.handleIndustrySelect = this.handleIndustrySelect.bind(this);
		this.handleBusinessNameChange = this.handleBusinessNameChange.bind(this);
		this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handleOccupancySelect = this.handleOccupancySelect.bind(this);
	}
	componentDidMount() {
		fetch('./options.json')
		.then(res => res.json())
		.then(data => {
			console.log("is this happening?", data);
			this.setState({
				industrySelection: data.industryOptions,
				occupancySelection: data.occupancySelection,
			  })
		});
  }
  
	handleIndustrySelect(e) {
		this.setState({ industrySelection: e.target.value }, () => console.log('industry', this.state.industrySelection));
	}
	
	handleBusinessNameChange(e) {
		this.setState({ businessName: e.target.value }, () => console.log('name:', this.state.businessName));
	}
	
	handleAddressChange(e) {
		this.setState({ address: e.target.value }, () => console.log('address:', this.state.address));
	}

	handleOccupancySelect(e) {
		this.setState({ occupancySelection: e.target.value }, () => console.log('occupancy', this.state.occupancySelection));
	}
		
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			industrySelection: '',
			businessName: '',
			address: '',
			occupancySelection: ''
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			industrySelection: this.state.handleIndustrySelect,
			businessName: this.state.businessName,
			address: this.state.address,
			occupancySelection: this.state.handleOccupancySelect
		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
	}
	
	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<Dialog >
					<AppBar>
						<DialogTitle>Get a Quote for your Salon</DialogTitle>
					</AppBar>
					<DialogContent style={{ padding: '20px 30px' }} >
						<DialogContentText>Let's get you a quote -- just a couple questions for you.</DialogContentText>
						<Industry
							name={'industry'}
							placeholder={'Choose your Industry'}
							controlFunc={this.handleIndustrySelect}
							options={this.state.industryOptions}
							selectedOption={this.state.industrySelection} />
						<Business
							inputType={'text'}
							title={'Full name'}
							name={'businessName'}
							controlFunc={this.handleBusinessNameChange}
							content={this.state.businessName}
							placeholder={'Type first and last name here'} />
						<Address
							inputType={'text'}
							title={'Full Address'}
							name={'address'}
							controlFunc={this.handleAddressChange}
							content={this.state.address}
							placeholder={'Type full address: street, city, state, & zip code.'} />
						<Occupancy
							name={'occupancy'}
							placeholder={'Choose your Space'}
							controlFunc={this.handleOccupancySelect}
							options={this.state.occupancyOptions}
							selectedOption={this.state.occupancySelection} />
						<DialogActions>
						<Button 
							type="submit"
							className="btn btn-primary float-right"
							value="Submit">Submit</Button>
						<Button
							className="btn btn-link float-left"
							onClick={this.handleClearForm}>Clear form</Button>
						</DialogActions>
					</DialogContent>
				</Dialog>
			</form>
		);
	}
}

export default FormDialog;