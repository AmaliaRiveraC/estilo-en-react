import React, { Component } from 'react';
import {Col, CardPanel} from 'react-materialize';

export default class PrimerElemento extends Component {
	render(){
		return(
			<Col s={3} m={3} >
				<CardPanel style={this.props.style}>
					<h3>{this.props.tituloCard}</h3>
					<p className="gris-texto">{this.props.parrafo}</p>
				</CardPanel>
			</Col>
		);
	}
}