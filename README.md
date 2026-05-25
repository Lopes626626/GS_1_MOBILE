# 🛸 Missão Espacial - Centro de Controle de Telemetria

O **Missão Espacial** é uma plataforma integrada de monitoramento e telemetria desenvolvida para o gerenciamento de sistemas operacionais, sensores computacionais e alertas críticos em missões aeroespaciais.

O projeto foi construído utilizando uma arquitetura moderna com **microsserviços**, integração entre **backend e frontend**, persistência de dados local e comunicação via API REST.

Este projeto compõe os requisitos de entrega da **Global Solution** da **FIAP**.

---

# 👥 Integrantes do Grupo

| Nome | RM |
|---|---|
| Rafael Lopes Bestilleiro Benedetti | 554781 |
| Breno Ferreira e Silva | 555503 |
| Vinicius de Abreu Fernandes | 558184 |

---

# 🛠️ Arquitetura e Tecnologias

## 🔙 Backend

- Java 17
- Spring Boot
- Spring Data JPA
- Banco de Dados H2
- Lombok
- Maven

---

## 🌐 Frontend Mobile / Web

- React Native
- Expo Framework
- TypeScript
- Axios

---

# 📂 Estrutura do Projeto

O ecossistema foi dividido seguindo boas práticas de desenvolvimento corporativo.

---

# 1️⃣ Backend (Spring Boot)

```text
src/main/java/br/com/fiap/missaoespacial/
├── MissaoespacialApplication.java
├── controller/
│   └── SistemaMonitoradoController.java
├── model/
│   └── SistemaMonitorado.java
├── repository/
│   └── SistemaMonitoradoRepository.java
└── service/
    └── SistemaMonitoradoService.java
```

---

## 📌 Descrição dos Arquivos

| Arquivo | Função |
|---|---|
| `MissaoespacialApplication.java` | Classe principal responsável pela inicialização da aplicação |
| `SistemaMonitoradoController.java` | Rotas REST para cadastro e listagem dos sistemas monitorados |
| `SistemaMonitorado.java` | Entidade JPA mapeada no banco de dados |
| `SistemaMonitoradoRepository.java` | Interface responsável pela persistência |
| `SistemaMonitoradoService.java` | Camada de regras de negócio |

---

# 2️⃣ Frontend (React Native + TypeScript)

```text
src/
├── components/
│   ├── SistemaCard.tsx
│   └── index.ts
├── interfaces/
│   └── sistema.ts
├── services/
│   ├── api.ts
│   └── sistemaService.ts
└── types/
    └── statusOperacional.ts
```

---

## 📌 Descrição dos Arquivos

| Arquivo | Função |
|---|---|
| `SistemaCard.tsx` | Componente visual dos sistemas monitorados |
| `index.ts` | Exportação centralizada dos componentes |
| `sistema.ts` | Interface do contrato de dados |
| `api.ts` | Configuração da instância Axios |
| `sistemaService.ts` | Serviços HTTP da aplicação |
| `statusOperacional.ts` | Tipagem dos estados operacionais |

---

# ⚡ Configuração e Execução

# ▶️ Executando o Backend

## 📋 Pré-requisitos

Certifique-se de possuir instalado:

- JDK 17
- Maven

---

## ▶️ Passos para Execução

### 1. Abra o projeto em uma IDE

Exemplos:

- IntelliJ IDEA
- Eclipse
- VS Code

---

### 2. Localize o arquivo principal

```text
MissaoespacialApplication.java
```

---

### 3. Execute a aplicação

Clique com o botão direito no arquivo e selecione:

```text
Run
```

---

### 4. O servidor iniciará em:

```text
http://localhost:8080
```

---

# 🗄️ Banco de Dados H2

Após iniciar o backend, acesse:

```text
http://localhost:8080/h2-console
```

---

## 🔗 Configuração da Conexão

```text
JDBC URL: jdbc:h2:file:./data/missaodb;AUTO_SERVER=TRUE
User Name: sa
Password: (deixar em branco)
```

---

# 🌐 Executando o Frontend

Abra o terminal na pasta raiz do frontend.

---

## 📦 Instalação das Dependências

```bash
npm install
```

---

## 🔗 Instalação do Axios

```bash
npx expo install axios
```

---

## ▶️ Inicialização do Projeto

```bash
npx expo start
```

---

## 💻 Execução no Navegador

Após iniciar o Expo, pressione:

```text
w
```

O projeto será aberto automaticamente utilizando o **Expo Web**.

---

# 📡 Endpoints Disponíveis da API

A API trabalha com requisições e respostas em formato JSON.

---

# 1️⃣ Cadastrar Sistema

## 🔗 Endpoint

```http
POST http://localhost:8080/sistemas
```

---

## 📥 Corpo da Requisição (JSON)

```json
{
  "nome": "Suporte de Vida Primário",
  "statusOperacional": "ATIVO",
  "nivelEnergia": 98.5,
  "responsavel": "Equipe Alfa"
}
```

---

## ✅ Resposta Esperada

```http
201 Created
```

---

# 2️⃣ Listar Todos os Sistemas

## 🔗 Endpoint

```http
GET http://localhost:8080/sistemas
```

---

## ✅ Resposta de Sucesso

```http
200 OK
```

---

## 📤 Exemplo de Resposta

```json
[
  {
    "id": 1,
    "nome": "Suporte de Vida Primário",
    "statusOperacional": "ATIVO",
    "nivelEnergia": 98.5,
    "responsavel": "Equipe Alfa"
  }
]
```

---

# 🧪 Testes da API no Postman

## 📌 Exemplo de Cadastro no Postman

### Método

```text
POST
```

### URL

```text
http://localhost:8080/sistemas
```

### Headers

```text
Content-Type: application/json
```

### Body → raw → JSON

```json
{
  "nome": "Suporte de Vida Primário",
  "statusOperacional": "ATIVO",
  "nivelEnergia": 98.5,
  "responsavel": "Equipe Alfa"
}
```

---

# 📡 Funcionalidades do Sistema

- Cadastro de sistemas monitorados
- Monitoramento operacional
- Integração completa entre frontend e backend
- Persistência local com H2
- API REST com Spring Boot
- Consumo de API via Axios
- Estrutura modular e escalável
- Interface multiplataforma com React Native + Expo

---

# 🚀 Objetivo do Projeto

O objetivo do projeto é simular um centro de controle de telemetria espacial capaz de monitorar sistemas críticos em tempo real, permitindo:

- Organização operacional
- Escalabilidade da aplicação
- Monitoramento de recursos
- Integração entre tecnologias modernas
- Simulação de ambientes críticos aeroespaciais

---

# 📚 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| Java 17 | Backend |
| Spring Boot | API REST |
| Spring Data JPA | Persistência |
| H2 Database | Banco de Dados |
| Maven | Dependências |
| React Native | Frontend |
| Expo | Execução Web/Mobile |
| TypeScript | Tipagem |
| Axios | Requisições HTTP |

---

# ✅ Status do Projeto

```text
✔️ Projeto Finalizado
✔️ Backend Funcional
✔️ Frontend Integrado
✔️ API REST Operacional
✔️ Banco H2 Configurado
✔️ Integração Axios Funcionando
```
