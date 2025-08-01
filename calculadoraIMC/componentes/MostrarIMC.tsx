import { View, Text } from 'react-native'
import React from 'react'
import { IMCResult } from '../Modelos/IMCResult'

interface Props {
  resultado: IMCResult;
}

export default function MostrarIMC(props: Props) {
  return (
    <View>
      <Text>Resultados del IMC</Text>
      <Text>Peso: {props.resultado.peso} kg</Text>
      <Text>Altura: {props.resultado.altura} cm</Text>
      <Text>IMC: {props.resultado.imc.toFixed(2)}</Text>
      <Text>Categoría: {props.resultado.categoria}</Text>
    </View>
  )
}