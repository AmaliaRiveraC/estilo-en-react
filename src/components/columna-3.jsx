import React, { Component } from 'react';
import {Col, CardPanel} from 'react-materialize';
import ParrafoCard from './parrafo-card.jsx';

export default class PrimerElemento extends Component {
	render(){
		return(
			<Col s={3} m={3} >
				<CardPanel style={this.props.style} className="espacio">
					<h3>{this.props.tituloCard}</h3>
					<p style={this.props.colorTexto}>{this.props.parrafo}</p>
				</CardPanel>
			</Col>
		);
	}
}