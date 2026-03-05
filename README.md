# Calculadora de Juros Compostos

Uma aplicação web simples desenvolvida com **HTML, CSS e JavaScript puro** para simular investimentos utilizando **juros compostos**, aportes mensais e geração de relatórios de evolução financeira.

O projeto foi desenvolvido com foco em **aprendizado de lógica financeira, manipulação de DOM e uso de LocalStorage**, sem dependência de frameworks ou banco de dados.

---

# Demonstração do Sistema

O sistema possui as seguintes telas:

- Login
- Calculadora de Juros Compostos
- Calculadora com Aporte Mensal
- Relatório de Evolução Mensal
- Perfil do Usuário
- Histórico de Relatórios

---

# Funcionalidades

## Sistema de Login

Tela simples de autenticação para acesso ao sistema.

Características:

- Entrada com qualquer usuário e senha (modo de aprendizado)
- Login ao pressionar **Enter**
- Armazenamento do nome do usuário no **LocalStorage**
- Redirecionamento automático para a calculadora

---

# Calculadora de Juros Compostos

Permite calcular o crescimento de um investimento ao longo do tempo.

Campos disponíveis:

- Capital inicial
- Taxa de juros mensal
- Tempo em meses

Resultado exibido:

- Montante final
- Juros totais obtidos

---

# Calculadora com Aporte Mensal

Permite simular investimentos com contribuições mensais.

Campos disponíveis:

- Capital inicial
- Aporte mensal
- Taxa de juros mensal
- Tempo em meses

O cálculo considera:

Saldo = Saldo + Juros + Aporte

Esse tipo de simulação é comum em investimentos como:

- Tesouro Direto
- Fundos de investimento
- Previdência privada
- Ações com reinvestimento

---

# Relatório de Evolução Mensal

Gera uma tabela mostrando a evolução do investimento mês a mês.

Informações exibidas:

| Mês | Valor Inicial | Juros do Mês | Valor Final |
|----|----|----|----|

Também apresenta um resumo final:

- Total investido
- Montante final
- Juros totais

---

# Exportação de Relatório

Após gerar um relatório, o usuário pode exportar os dados.

Formato disponível:

**CSV**

Isso permite abrir os dados em ferramentas como:

- Excel
- LibreOffice
- Google Sheets

---

# Histórico de Relatórios

Cada relatório gerado é salvo automaticamente no navegador usando **LocalStorage**.

Os dados registrados incluem:

- Data do relatório
- Valor investido
- Montante final
- Juros totais

Essas informações ficam disponíveis na página de perfil do usuário.

---

# Perfil do Usuário

Tela simples para gerenciamento de informações do usuário.

Campos disponíveis:

- Nome
- Email
- Telefone

Essas informações são armazenadas no navegador usando **LocalStorage**.

---

# Histórico no Perfil

Na página de perfil é possível visualizar:

Tabela com:

| Data | Investido | Montante | Juros |

Isso permite acompanhar simulações realizadas anteriormente.

---

# Limpar Histórico

O usuário pode apagar todo o histórico de relatórios com um botão dedicado.

Processo:

1. Clique em **Limpar Histórico**
2. Confirme a operação
3. Os dados são removidos do LocalStorage

---

# Armazenamento de Dados

Este projeto não utiliza banco de dados.

Todos os dados são armazenados no navegador utilizando:

LocalStorage


Dados salvos:

- Perfil do usuário
- Histórico de relatórios
- Nome do usuário logado

Isso permite persistência mesmo após fechar o navegador.

---

# Estrutura de Pastas

Exemplo da estrutura utilizada:


---

# Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage API

O projeto foi desenvolvido sem frameworks para facilitar o aprendizado da base do desenvolvimento web.

---

# Objetivos do Projeto

Este sistema foi criado para praticar:

- Manipulação do DOM
- Eventos JavaScript
- Estruturação de aplicações front-end
- Organização de páginas web
- Persistência de dados no navegador
- Simulações financeiras

---

# Melhorias Futuras

Possíveis evoluções do sistema:

- Integração com banco de dados
- Autenticação real de usuários
- Dashboard com gráficos financeiros
- Exportação em PDF
- Sistema de múltiplos usuários
- Armazenamento em API
- Responsividade mobile completa
