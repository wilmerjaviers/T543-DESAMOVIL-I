export interface ResultadoEjercicio {
  diasSemana: number;
  diasEntrenamiento: number;
  objetivoOriginal: number;
  tiempoPromedio: number;
  objetivoAlcanzado: boolean;
  calificacion: 1 | 2 | 3;
  explicacionCalificacion: string;
}