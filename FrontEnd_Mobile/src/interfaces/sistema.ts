import { StatusOperacional } from '../types/statusOperacional';

export interface SistemaMonitorado {
  id?: number;
  nome: string;
  statusOperacional: StatusOperacional;
  nivelEnergia: number;
  responsavel: string;
}