import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  // State que controla el estado de los botones
  state = {
    btn1: false, btn2: false, btn3: false, btn4: false, btn5: false
  }

  // Se encarga de cambiar el estado del primer botón al cabo de 3 segundos
  componentDidMount() {
    setTimeout(() => {
      this.setState({...this.state, btn1: !this.state.btn1});
    }, 3000);
  }
 
  render() {
    // Función que calcula los transform de los botones
    const propiedadTransform = indice_boton => {
      // i (indice_boton) va de 1 hasta 5
      // Formula si  i == 1 entonces (i) => (i*270), 16, -(i*270)
      // Formula si  i >= 2 entonces (i) => ((i-2)*60), 16, -((i-2)*60)

      const grados = indice_boton >= 2 ?( (indice_boton - 2) * 60) :(indice_boton * 270);
      return `rotate(${grados}deg) translate(16em) rotate(-${grados}deg)`;
    }

    // Estilos de cada uno de los botones del Componente
    const btn1_styles = {
      transform: propiedadTransform(1),
      backgroundColor: `${this.state.btn1 ?'crimson' :'gray'}`,
      color:' white',
      fontWeight: 'bold',
      fontSize: 'medium'
    }

    const btn2_styles = {
      transform: propiedadTransform(2),
      backgroundColor: `${this.state.btn2 ?'darkcyan' :'gray'}`,
      color:' white',
      fontWeight: 'bold',
      fontSize: 'medium'
    }

    const btn3_styles = {
      transform: propiedadTransform(3),
      backgroundColor: `${this.state.btn3 ?'orangered' :'gray'}`,
      color:' white',
      fontWeight: 'bold',
      fontSize: 'medium'
    }

    const btn4_styles = {
      transform: propiedadTransform(4),
      backgroundColor: `${this.state.btn4 ?'navy' :'gray'}`,
      color:' white',
      fontWeight: 'bold',
      fontSize: 'medium'
    }

    const btn5_styles = {
      transform: propiedadTransform(5),
      backgroundColor: `${this.state.btn5 ?'cyan' :'gray'}`,
      color:' white',
      fontWeight: 'bold',
      fontSize: 'medium'
    }

    return (
      <div className='contenedor'>
        <button style={btn1_styles}
        >{this.state.btn1 ?'DIAGNÓSTICO' :''}</button>

        <button style={btn2_styles}
          onClick={() => {
            if(this.state.btn1){
              this.setState({...this.state, btn2: true })
            } 
          }}
        >{this.state.btn2 ?'PLANEACIÓN' :''}</button>

        <button style={btn3_styles}
          onClick={() => {
            if(this.state.btn2){
              this.setState({...this.state, btn3: true })
            } 
          }}
        >{this.state.btn3 ?'EJECUCIÓN' :''}</button>

        <button style={btn4_styles}
          onClick={() => {
            if(this.state.btn3){
              this.setState({...this.state, btn4: true })
            } 
          }}
        >{this.state.btn4 ?'SEGUIMIENTO Y EVALUACIÓN' :''}</button>

        <button style={btn5_styles}
          onClick={() => {
            if(this.state.btn4){
              this.setState({...this.state, btn5: true })
            } 
          }}
        >{this.state.btn5 ?'RENDICIÓN DE CUENTAS' :''}</button>
      </div>
    )
  }
}

