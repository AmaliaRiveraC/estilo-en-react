import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Col, CardPanel, Row} from 'react-materialize';
import PrimerElemento from './components/columna-3.jsx';
import SegundoElemento from './components/columna-9.jsx';
import TercerElemento from './components/tercer-elemento.jsx';



			

class App extends Component {
	
	render() {
		const naranja = {
			color: "white",
			backgroundColor: "#ff4500"
		}
		
		const morado = {
			backgroundColor: "#9663a2"
		}
		
		const verde = {
			backgroundColor: "#87d71c"
		}
		
		
		const azul = {
			backgroundColor: "#00bfff"
		}
		
		const rosa = {
			backgroundColor: "#ff1493"
		}
		
		const gris = {
			backgroundColor: "#828282"
		}
		
		const grisTexto = {
			color: "#9c9c9c"
		}
	
		const blanco = {
			backgroundColor: "#fff"
		}
			return (

			<Row className="App">
			<Row>

			<PrimerElemento colorTexto={grisTexto} tituloCard="20"  parrafo="New followers added this month" />

			<PrimerElemento colorTexto={grisTexto} tituloCard="$1250" parrafo="Average Monthly income" />

			<PrimerElemento colorTexto={grisTexto} tituloCard="$13865" parrafo="Yearly Income Goal" />

			<PrimerElemento style={naranja}   tituloCard="18°" parrafo="París" />

			</Row>
			<Row>

			<SegundoElemento style1={azul} gris={gris}/>
			<TercerElemento style2={azul} parrafoCard2="New visitors" tituloCard2="1.5k" white={blanco}/>
			<TercerElemento style2={morado} parrafoCard2="Bounce Rate" tituloCard2="50%" white={blanco}/>

			</Row>
			<Row>
			<SegundoElemento style1={rosa} gris={gris}/>

			<TercerElemento style2={naranja} parrafoCard2="Searchs" tituloCard2="28%" white={blanco}/>

			<TercerElemento style2={verde} parrafoCard2="Traffic" tituloCard2="140.5 kb" white={blanco}/>

			</Row>
			</Row>


		);
	}
}

export default App;
