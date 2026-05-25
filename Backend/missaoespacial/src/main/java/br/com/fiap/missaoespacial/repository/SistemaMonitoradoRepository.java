package br.com.fiap.missaoespacial.repository;

import br.com.fiap.missaoespacial.model.SistemaMonitorado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SistemaMonitoradoRepository extends JpaRepository<SistemaMonitorado, Long> {
}