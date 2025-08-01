import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Asignatura } from './Modelos/Asignatura';
import OperacionesAritmeticas from './Components/OperacionesAritmeticas';
import ListaAsignatura from './Components/ListaAsignatura';
import CalculadoraEjercicios from './Components/CalculadoraEjercicios';
import React from 'react';

export default function App() {

  let asignatura: Asignatura = {
    nombreAsignatura: 'Desarrollo Movil',
    numeroHoras: 3
  }

  function sumarNumeros(a: number, b: number): number {
    return a + b;
  }

  type operaciones = 'multiplicar' | 'Sumar' | 'Restar';

  let operacion: operaciones = 'multiplicar';
  
  
  let horasSemanales: number[] = [3, 0, 2, 4.5, 1, 2.5, 0];
  let objetivoDiario: number = 2; 

  return (
    <View style={styles.container}>
      <Text>Primera aplicacion en React Native</Text>

      <Text>Nombre Asignatura : {asignatura.nombreAsignatura}</Text>
      <Text>Numero de Horas : {asignatura.numeroHoras}</Text>
      <Text>Resultado Suma: {sumarNumeros(3, 3)}</Text>
      
      <OperacionesAritmeticas a={5} b={10} tipoOperacion={operacion}></OperacionesAritmeticas>

      <ListaAsignatura></ListaAsignatura>

      <CalculadoraEjercicios horasEjercicio={horasSemanales} objetivoDiario={objetivoDiario}></CalculadoraEjercicios>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});