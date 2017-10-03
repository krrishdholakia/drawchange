import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Col } from 'react-bootstrap';

const Dashboard = () => (
	<Grid>
        <Col md={2}/>
        <Col md={8}>
			<Jumbotron>
				<h1>DASHBOARD</h1>
		  	</Jumbotron>
		</Col>
		<Col md={2}/>
	</Grid>
)

export default Dashboard;
