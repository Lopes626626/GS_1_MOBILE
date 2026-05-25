package br.com.fiap.missaoespacial.controller;

import br.com.fiap.missaoespacial.model.SistemaMonitorado;
import br.com.fiap.missaoespacial.service.SistemaMonitoradoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sistemas")
@CrossOrigin(origins = "*", maxAge = 3600)
public class SistemaMonitoradoController {

    @Autowired
    private SistemaMonitoradoService service;

    @PostMapping
    public ResponseEntity<SistemaMonitorado> cadastrar(@RequestBody SistemaMonitorado sistema) {
        SistemaMonitorado novoSistema = service.salvar(sistema);
        return new ResponseEntity<>(novoSistema, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<SistemaMonitorado>> listar() {
        return ResponseEntity.ok(service.listarTodos());
    }
}
