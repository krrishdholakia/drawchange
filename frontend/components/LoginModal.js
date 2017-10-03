import React, { Component } from 'react';
import { Button, Modal, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class LoginModal extends Component {
	constructor(props) {
		super(props);
		// UI states
		this.state = { show: false };
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		// Input references
		this.email;
		this.password;
		this.login = this.login.bind(this);
	}

	close() {
		this.setState({ show: false });
	};

	open() {
		this.setState({ show: true });
	};

	// Ajax calls
	login() {
		fetch(`/api/login/volunteer?email=${this.email.value}&password=${this.password.value}`)
        .then( (res) => res.json() )
        .then(
			(json) => {
				if (json.success === "true") {
					this.props.history.push('/dashboard');
				}
			}
		)
        .catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<Button bsStyle="primary" bsSize="large" onClick={this.open}>
				  Login
				</Button>

				<Modal show={this.state.show} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Volunteer Login</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form className="container-fluid">
							<FormGroup>
								<ControlLabel>email</ControlLabel>
								<FormControl
									type="email"
									placeholder="Enter email"
									inputRef={ref => { this.email = ref; }}
								/>
							</FormGroup>
							<FormGroup>
								<ControlLabel>password</ControlLabel>
								<FormControl
									type="password"
									placeholder="Enter password"
									inputRef={ref => { this.password = ref; }}
								/>
							</FormGroup>
						  </Form>
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="primary" onClick={this.login}>
							Login
						</Button>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
    );
  }
};

export default LoginModal;
