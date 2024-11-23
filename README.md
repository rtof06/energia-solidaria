# Projeto Energia Solidária

Projeto de financiamento coletivo com o propósito de levar energia limpa e sustentável para escolas e postos de saúde da rede pública, conscientizando a população e respeitando o meio ambiente.

---

## Estrutura do Projeto

### 📂 **api**
Contém as requisições relacionadas ao **login** e **cadastro**. Esta pasta é o núcleo do back-end da aplicação, responsável por:
- Gerenciar autenticações de usuários.
- Cadastrar novos usuários no sistema.
- Integrar com o banco de dados (ou outro sistema de armazenamento de dados).

### 📂 **cadastro**
Página de interface para novos usuários se cadastrarem na plataforma. Inclui:
- Formulário para inserção de dados.
- Integração com as rotas da API.

### 📂 **esqueciMinhaSenha**
Página destinada à recuperação de senha. Oferece:
- Campo para solicitação de redefinição de senha.
- Integração com possíveis validações por e-mail.

### 📂 **localData**
Esta pasta contém informações dos **desenvolvedores** do projeto, como:
- Nome.
- Função no projeto.
- Dados para contato (se aplicável).

### 📂 **login**
Página de autenticação para usuários existentes. Inclui:
- Formulário de entrada.
- Mensagens de erro para credenciais inválidas.
- Integração com as rotas da API.

### 📂 **projetos**
Página que apresenta os projetos que foram apresentados.

### 📂 **time**
Página de apresentação do time responsável pela aplicação. Mostra:
- Informações detalhadas sobre os desenvolvedores.
- Papéis e responsabilidades no projeto.

### 📂 **validation**
Implementa a validação de senha. Contém:
- Regras específicas para validação, como a checagem de senha.

---

## Tecnologias Utilizadas
- **Front-end:** Next.JS
- **Back-end:** Java
- **Banco de Dados:** Oracle

---

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/repositorio.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
4. Acesse o projeto no navegador:
   ```bash
   http://localhost:3000
   ```

---

## Funcionalidades
- Cadastro e autenticação de usuários.
- Recuperação de senha com validação segura.
- Visualização de projetos e time de desenvolvedores.

---

## Desenvolvedores
- Ricardo Tavares de Oliveira Filho
- Pedro Abrantes Andrade
- Victor Alves Carmona

---

## Contribuições
Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue.

---

## Licença
[Licença MIT](LICENSE)
```
