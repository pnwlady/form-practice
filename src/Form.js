import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Industry from './components/Industry';
import Business from './components/Business';
import Address from './components/Address';
import Occupancy from './components/Occupancy';
import Phone from './components/Phone';

const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));

export default function FormDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
  
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullScreen={fullScreen} >
            <AppBar className={classes.appBar}> 
            <DialogTitle id="form-dialog-title">Get a Quote for your Salon</DialogTitle>
            </AppBar>
            <DialogContent id="content">
                <DialogContentText>
                Let's get you a quote -- just a couple questions for you.
                </DialogContentText>
            <Industry />
            <Business />
            </DialogContent>
            <Address />
            <Occupancy />
            <Phone />
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                Get Quote
                </Button>
            </DialogActions>
        </Dialog>
      </div>
    );
  }

// class Form extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			username: '',
// 			comments: '',
// 			topic: 'react'
// 		}
// 	}

// 	handleUsernameChange = event => {
// 		this.setState({
// 			username: event.target.value
// 		})
// 	}

// 	handleCommentsChange = event => {
// 		this.setState({
// 			comments: event.target.value
// 		})
// 	}

// 	handleTopicChange = event => {
// 		this.setState({
// 			topic: event.target.value
// 		})
// 	}

// 	handleSubmit = event => {
// 		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
// 		event.preventDefault()
// 	}

// 	render() {
// 		const { username, comments, topic } = this.state
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<div>
// 					<label>Username </label>
// 					<input
// 						type="text"
// 						value={username}
// 						onChange={this.handleUsernameChange}
// 					/>
// 				</div>
// 				<div>
// 					<label>Comments</label>
// 					<textarea
// 						value={comments}
// 						onChange={this.handleCommentsChange}
// 					/>
// 				</div>
// 				<div>
// 					<label>Topic</label>
// 					<select value={topic} onChange={this.handleTopicChange}>
// 						<option value="react">React</option>
// 						<option value="angular">Angular</option>
// 						<option value="vue">Vue</option>
// 					</select>
// 				</div>
// 				<button type="submit">Submit</button>
// 			</form>
// 		)
// 	}
// }

// export default Form
