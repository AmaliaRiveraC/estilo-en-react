import React, { Component } from 'react';
import {Row, Col, CardPanel} from 'react-materialize';
import Parrafo from './parrafo.jsx';




export default class SegundoElemento extends Component {
	render(){
		
		return(
			<Col s={9} m={9} className="Gran-card card-panel-modificado">
				<CardPanel style={this.props.style1}>
				<div className="mitad-gran"></div>
				<div className="mitad-gran" style={this.props.gris}>
					<Parrafo subtituloCard="15080" textoParrafo="Shot Views"/>
					<Parrafo subtituloCard="12000" textoParrafo="Likes"/>
					<Parrafo subtituloCard="5100" textoParrafo="Comments" />
				</div>
				</CardPanel>
			</Col>
			
		)
	}
}