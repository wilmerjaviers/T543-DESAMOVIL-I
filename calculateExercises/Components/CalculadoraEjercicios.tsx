import { View, Text } from 'react-native'
import React from 'react'
import { ResultadoEjercicio } from '../Modelos/ResultadoEjercicio';

interface Parametros {
  horasEjercicio: number[];
  objetivoDiario: number;
}

export default function CalculadoraEjercicios(props: Parametros) {

  function calculateExercises(horasEjercicio: number[], objetivoDiario: number): ResultadoEjercicio {
    
    const diasSemana = 7;
    const diasEntrenamiento = horasEjercicio.filter(horas => horas > 0).length;
    const totalHoras = horasEjercicio.reduce((suma, horas) => suma + horas, 0);
    const tiempoPromedio = totalHoras / diasSemana;
    const objetivoAlcanzado = tiempoPromedio >= objetivoDiario;
    
    let calificacion: 1 | 2 | 3;
    let explicacionCalificacion: string;
    
    if (tiempoPromedio >= objetivoDiario) {
      calificacion = 3;
      explicacionCalificacion = "Excelente! Has superado tu objetivo diario";
    } else if (tiempoPromedio >= objetivoDiario * 0.7) {
      calificacion = 2;
      explicacionCalificacion = "Bien! Estás cerca de alcanzar tu objetivo";
    } else {
      calificacion = 1;
      explicacionCalificacion = "Necesitas entrenar más para alcanzar tu objetivo";
    }

    return {
      diasSemana,
      diasEntrenamiento,
      objetivoOriginal: objetivoDiario,
      tiempoPromedio,
      objetivoAlcanzado,
      calificacion,
      explicacionCalificacion
    };
  }

  const resultado = calculateExercises(props.horasEjercicio, props.objetivoDiario);

  return (
    <View>
       <Text>-Ejercicio Tarea Hoy-</Text>
      <Text>.............................. Estadísticas de Ejercicio ..............................</Text>
      <Text>Días de la semana: {resultado.diasSemana}</Text>
      <Text>Días de entrenamiento: {resultado.diasEntrenamiento}</Text>
      <Text>Objetivo diario: {resultado.objetivoOriginal} horas</Text>
      <Text>Tiempo promedio: {resultado.tiempoPromedio.toFixed(2)} horas</Text>
      <Text>Objetivo alcanzado: {resultado.objetivoAlcanzado ? 'Sí' : 'No'}</Text>
      <Text>Calificación: {resultado.calificacion}/3</Text>
      <Text>Comentario: {resultado.explicacionCalificacion}</Text>
    </View>
  )
}

