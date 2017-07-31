import React, { Component } from 'react';
import {Col} from 'react-materialize';

export default class ParrafoGranCard extends Component {
	render(){
		return(
			<Col s={4} m={4}>
						<h4 className="texto-blanco">{this.props.subtituloCard}</h4>
						<p className="gris-texto" style={this.props.colorParrafo}>{this.props.textoParrafo}</p>
			</Col>
		);
	}
}