import React, { Component } from 'react';
import {Col} from 'react-materialize';

export default class ParrafoGranCard extends Component {
	render(){
		return(
			<Col s={4} m={4}>
						<h2>{this.props.subtituloCard}</h2>
						<p>{this.props.textoParrafo}</p>
			</Col>
		);
	}
}