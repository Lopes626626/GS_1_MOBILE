import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { sistemaService } from './src/services/sistemaService';
import { SistemaMonitorado } from './src/interfaces/sistema';
import { SistemaCard } from './src/components';

export default function App() {
  const [sistemas, setSistemas] = useState<SistemaMonitorado[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDadosMissao = async () => {
    try {
      setLoading(true);
      setError(null);
      const dados = await sistemaService.listarTodos();
      setSistemas(dados);
    } catch (err) {
      setError("Falha na conexão com o mainframe da missão.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDadosMissao();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🚀 MISSÃO DE CONTROLE</Text>
        <Text style={styles.subtitle}>Painel de Telemetria Integrado</Text>
      </View>

      {/* Estado: Carregando */}
      {loading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#00d2d3" />
          <Text style={styles.loadingText}>Sincronizando com a órbita...</Text>
        </View>
      )}

      {/* Estado: Erro */}
      {!loading && error && (
        <View style={styles.center}>
          <Text style={styles.errorText}>⚠️ {error}</Text>
          <TouchableOpacity style={styles.button} onPress={fetchDadosMissao}>
            <Text style={styles.buttonText}>RECONECTAR</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Lista Principal */}
      {!loading && !error && (
        <FlatList
          data={sistemas}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <SistemaCard sistema={item} />}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum sistema detectado na rede.</Text>
          }
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f141c', // Tema escuro espacial
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00d2d3',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#a4b0be',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  loadingText: {
    marginTop: 12,
    color: '#00d2d3',
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  emptyText: {
    color: '#a4b0be',
    textAlign: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#00d2d3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#0f141c',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});