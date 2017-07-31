import React, { Component } from 'react';
import {Col, CardPanel} from 'react-materialize';

export default class TercerElemento extends Component {
	render(){
		
		return(
			<Col s={3} m={3}>
				<CardPanel style={this.props.style2} className="mitad">
						<p>{this.props.parrafoCard2}</p>
						<h4>{this.props.tituloCard2}</h4>
				</CardPanel>
			</Col>
		);
	}
}