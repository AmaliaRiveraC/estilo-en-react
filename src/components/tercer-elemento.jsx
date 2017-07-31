import React, { Component } from 'react';
import {Col, CardPanel} from 'react-materialize';

export default class TercerElemento extends Component {
	render(){
		
		return(
			<Col s={3} m={3}>
				<CardPanel style={this.props.style2} className="card">
					<div className="parrafo-card">
						<p className="texto-blanco">{this.props.parrafoCard2}</p>
						<h5 className="texto-blanco">{this.props.tituloCard2}</h5>
					</div>
					<div className="mitad" style={this.props.white}></div>
				</CardPanel>
			</Col>
		);
	}
}