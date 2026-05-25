import api from './api';
import { SistemaMonitorado } from '../interfaces/sistema';

export const sistemaService = {
  listarTodos: async (): Promise<SistemaMonitorado[]> => {
    const response = await api.get<SistemaMonitorado[]>('/sistemas');
    return response.data;
  },

  cadastrar: async (sistema: SistemaMonitorado): Promise<SistemaMonitorado> => {
    const response = await api.post<SistemaMonitorado>('/sistemas', sistema);
    return response.data;
  }
};