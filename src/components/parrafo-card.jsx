import React, { Component } from 'react';
import {Col} from 'react-materialize';

export default class ParrafoCard extends Component {
	render(){
		return (
			<Col s={12} m={12}>
				<h3>{this.props.tituloCard}</h3>
				<p style={this.props.colorTexto}>{this.props.parrafo}</p>
			</Col>
		);
	}
}