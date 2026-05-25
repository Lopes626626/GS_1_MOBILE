package br.com.fiap.missaoespacial.service;

import br.com.fiap.missaoespacial.model.SistemaMonitorado;
import br.com.fiap.missaoespacial.repository.SistemaMonitoradoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SistemaMonitoradoService {

    @Autowired
    private SistemaMonitoradoRepository repository;

    public SistemaMonitorado salvar(SistemaMonitorado sistema) {
        return repository.save(sistema);
    }

    public List<SistemaMonitorado> listarTodos() {
        return repository.findAll();
    }

    public Optional<SistemaMonitorado> buscarPorId(Long id) {
        return repository.findById(id);
    }
}