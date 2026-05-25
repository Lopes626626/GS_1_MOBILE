import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SistemaMonitorado } from '../interfaces/sistema';

interface SistemaCardProps {
  sistema: SistemaMonitorado;
}

export default function SistemaCard({ sistema }: SistemaCardProps) {
  // Cor dinâmica baseada no status operacional do sistema
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ATIVO': return '#2ecc71';
      case 'STANDBY': return '#f1c40f';
      case 'FALHA': return '#e74c3c';
      default: return '#7f8c8d';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.nome}>{sistema.nome}</Text>
        <View style={[styles.badge, { backgroundColor: getStatusColor(sistema.statusOperacional) }]}>
          <Text style={styles.badgeText}>{sistema.statusOperacional}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Nível de Energia:</Text>
        <Text style={styles.value}>{sistema.nivelEnergia}%</Text>
      </View>

      <Text style={styles.footer}>Responsável: {sistema.responsavel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e272e',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#3d4852',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    color: '#95a5a6',
  },
  value: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    color: '#bdc3c7',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: '#3d4852',
  },
});