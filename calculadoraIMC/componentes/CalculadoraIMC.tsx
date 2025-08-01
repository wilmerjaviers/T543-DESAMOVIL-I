import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IMCResult } from '../Modelos/IMCResult'
import MostrarIMC from './MostrarIMC';


export default function CalculadoraIMC() {

  const [peso, setPeso] = useState<number>(70); // kg
  const [altura, setAltura] = useState<number>(170); // cm
  const [resultadoIMC, setResultadoIMC] = useState<IMCResult | null>(null);

  function aumentarPeso() {
    setPeso(peso + 1);
  }

  function disminuirPeso() {
    if (peso <= 1) return;
    setPeso(peso - 1);
  }

  function aumentarAltura() {
    setAltura(altura + 1);
  }

  function disminuirAltura() {
    if (altura <= 1) return;
    setAltura(altura - 1);
  }

  function calcularIMC(pesoKg: number, alturaCm: number): IMCResult {
    const alturaMetros = alturaCm / 100;
    const imc = pesoKg / (alturaMetros * alturaMetros);
    
    let categoria: string;
    
    if (imc < 18.5) {
      categoria = "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      categoria = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      categoria = "Sobrepeso";
    } else {
      categoria = "Obesidad";
    }

    return {
      peso: pesoKg,
      altura: alturaCm,
      imc: imc,
      categoria: categoria
    };
  }


  useEffect(() => {
    const resultado = calcularIMC(peso, altura);
    setResultadoIMC(resultado);
  }, [peso, altura]);


  useEffect(() => {
    console.log('Calculadora IMC cargada');
  }, []);

  return (
    <View>
      <Text>Calculadora de IMC</Text>
      
      <Text>Peso: {peso} kg</Text>
      <Button title='Aumentar Peso (+1 KG)' onPress={aumentarPeso}></Button>
      <Button title='Disminuir Peso (-1 KG)' onPress={disminuirPeso}></Button>
      
      <Text>Altura: {altura} cm</Text>
      <Button title='Aumentar Altura (+1 CM)' onPress={aumentarAltura}></Button>
      <Button title='Disminuir Altura (-1 CM)' onPress={disminuirAltura}></Button>

      {resultadoIMC && (
        <MostrarIMC resultado={resultadoIMC}></MostrarIMC>
      )}
    </View>
  )
}