# 🛸 Missão Espacial - Centro de Controle de Telemetria

O **Missão Espacial** é uma plataforma integrada de monitoramento e telemetria desenvolvida para o gerenciamento de sistemas operacionais, sensores computacionais e alertas críticos em missões aeroespaciais. O projeto foi construído utilizando uma arquitetura robusta de microsserviços para o ecossistema de backend e um painel dinâmico multiplataforma no frontend.

Este projeto compõe os requisitos de entrega da **Global Solution** da **FIAP**.

---

# 👥 Integrantes do Grupo

* **Rafael Lopes Bestilleiro Benedetti** - RM: **554781**
* **Breno Ferreira e SIlva** - RM: **555503**
* **Vinicius de Abreu Fernandes** - RM: **558184**

---

# 🛠️ Arquitetura e Tecnologias

## Backend

* **Java 17** com **Spring Boot**
* **Spring Data JPA** para persistência de dados
* **Banco de Dados H2** em modo arquivo (`./data/missaodb`) para armazenamento local
* **Lombok** para redução de código boilerplate
* **Maven** para gerenciamento de dependências

## Frontend Mobile / Web

* **React Native** com **Expo Framework** (executando nativamente via Expo Web)
* **TypeScript** para tipagem estática e segurança em tempo de compilação
* **Axios** como cliente HTTP para consumo assíncrono da API REST

---

# 📂 Estrutura de Pastas de Ambas as Stacks

O ecossistema é dividido estritamente conforme as melhores práticas de desenvolvimento corporativo.

---

## 1️⃣ Backend (Spring Boot)

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

### 📌 Descrição dos Arquivos

| Arquivo | Função |
|---|---|
| `MissaoespacialApplication.java` | Classe principal responsável pela inicialização da aplicação |
| `SistemaMonitoradoController.java` | Rotas REST para cadastro e listagem dos sistemas monitorados |
| `SistemaMonitorado.java` | Entidade JPA mapeada no banco de dados |
| `SistemaMonitoradoRepository.java` | Interface de persistência de dados |
| `SistemaMonitoradoService.java` | Camada responsável pelas regras de negócio |

---

## 2️⃣ Frontend (React Native + TypeScript)

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

### 📌 Descrição dos Arquivos

| Arquivo | Função |
|---|---|
| `SistemaCard.tsx` | Componente visual responsável pela renderização dos dados |
| `index.ts` | Exportação centralizada dos componentes |
| `sistema.ts` | Interface do contrato de dados do sistema monitorado |
| `api.ts` | Configuração centralizada da instância Axios |
| `sistemaService.ts` | Serviços responsáveis pelas chamadas HTTP |
| `statusOperacional.ts` | Tipagem dos estados operacionais |

---

# ⚡ Configuração e Execução

## ▶️ Como Executar o Backend (Java)

Certifique-se de possuir os seguintes requisitos instalados:

* **JDK 17**
* **Maven**

### Passos para execução

1. Abra o projeto em sua IDE de preferência:
   * IntelliJ IDEA
   * Eclipse
   * VS Code

2. Localize o arquivo:

```text
MissaoespacialApplication.java
```

3. Execute a aplicação clicando com o botão direito e selecionando:

```text
Run
```

4. O servidor iniciará automaticamente na porta:

```text
http://localhost:8080
```

---

# 🗄️ Acesso ao Banco H2

Abra o navegador e acesse:

```text
http://localhost:8080/h2-console
```

### Configuração da conexão

```text
JDBC URL: jdbc:h2:file:./data/missaodb;AUTO_SERVER=TRUE
User Name: sa
Password: (deixar em branco)
```

---

# 🌐 Como Executar o Frontend (React Native + Expo)

Abra o terminal e navegue até a pasta raiz do frontend.

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

Isso abrirá automaticamente o projeto utilizando o **Expo Web** no navegador.

---

# 📡 Funcionalidades do Sistema

* Cadastro de sistemas monitorados
* Monitoramento de status operacionais
* Integração completa entre frontend e backend
* Persistência local utilizando banco H2
* Consumo de API REST com Axios
* Estrutura modular e escalável
* Interface multiplataforma via React Native + Expo

---

# 🚀 Objetivo do Projeto

O objetivo do projeto é simular um centro de controle de telemetria espacial capaz de monitorar sistemas críticos em tempo real, permitindo organização, escalabilidade e integração entre diferentes tecnologias modernas do mercado.

---

# 🎓 Projeto Acadêmico

Projeto desenvolvido para fins acadêmicos como entrega da **Global Solution - FIAP**.