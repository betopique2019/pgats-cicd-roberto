
# Entrega do Desafio – CI/CD com GitHub Actions  
Pós-Graduação em Automação de Testes – PGATS  
Aluno: **Roberto Piqueira**

---

## 🎯 Objetivo do Desafio

Implementar um pipeline de **Integração Contínua (CI)** utilizando **GitHub Actions**, capaz de:

- Instalar dependências  
- Executar testes automatizados com **Jest**  
- Gerar relatório de cobertura  
- Criar a pasta de cobertura sem falhas  
- Publicar o relatório como **artifact**  
- Garantir execução automática a cada push no branch `master`

---

## 🏗️ Estrutura do Pipeline

O pipeline foi implementado no arquivo:

.github/workflows/cy.yml

### Etapas executadas:

1. **Checkout do código**
2. **Instalação das dependências**
3. **Execução dos testes com Jest**
4. **Geração da pasta `coverage/`**
5. **Criação da pasta com `mkdir -p coverage`**  
   - Evita erro caso a pasta já exista
6. **Upload do artifact de cobertura**

---

## 🧪 Execução dos Testes

Os testes são executados com:

npm test -- --coverage

O Jest gera automaticamente o relatório dentro da pasta:

coverage/

---

## 🛠️ Ajuste Importante no Pipeline

Para evitar falha quando a pasta `coverage` já existe, foi utilizado:

mkdir -p coverage

Esse comando garante que o pipeline não quebre caso a pasta já tenha sido criada pelo Jest.

---

## 📦 Artifact Gerado

Ao final da execução, o GitHub Actions publica o artifact:

cobertura.zip

Esse arquivo contém o relatório de cobertura completo.

---

## 📸 Evidência da Execução

<img width="1278" height="1270" alt="image" src="https://github.com/user-attachments/assets/ef5f8c8b-6011-4d41-9c1b-9cbbb1006ff9" />

---

## 🔗 Repositório da Entrega

https://github.com/betopique2019/pgats-cicd-roberto

---

## ✔️ Resultado Final

- Pipeline executando com sucesso  
- Testes rodando corretamente  
- Cobertura gerada  
- Artifact publicado  
- Repositório limpo e organizado  
- README atualizado conforme o desafio  

---

## 👤 Autor

**Roberto Piqueira**  
Pós-Graduação em Automação de Testes – PGATS
