import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Col, Form, FormGroup, ControlLabel, FormControl, Panel, Button } from 'react-bootstrap';

export default class Registration extends Component {
	constructor() {
		super();
		this.email;
		this.password;
	};

	render() {
		return (
			<Grid>
				<Col md={2}/>
				<Col md={8}>
					<Panel header="Registration Form">
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
						<Col mdOffset={10}>
							<Button bsStyle="primary">
								Submit
							</Button>
						</Col>
					</Panel>
				</Col>
				<Col md={2}/>
			</Grid>
		)
	}

}
