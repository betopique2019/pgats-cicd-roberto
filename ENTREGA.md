# 📘 Entrega — Exercícios de CI/CD  
Aluno: Roberto Souza  

---

# 🚀 Exercício 1 — Pipeline em Azure DevOps

Implementei uma pipeline YAML no Azure DevOps contendo:

- Build  
- Execução de testes  
- Relatório de cobertura  
- Publicação de artefatos  

A pipeline executou com sucesso, apresentando:

- 100% dos testes passando  
-  80% de cobertura  
- Execução validada no Azure DevOps  

Arquivo principal utilizado:
azure-pipelines.yml

---

# 🧩 Exercício 2 — GitHub Marketplace Actions

Para cumprir o exercício conforme solicitado, utilizei Actions do GitHub Marketplace para:

- Publicar resultados de testes  
- Publicar cobertura de código  
- Armazenar artefatos de execução  

Workflow utilizado:
.github/workflows/ci.yml

Exemplos de Actions utilizadas:

- `actions/upload-artifact@v3`  
- `actions/setup-dotnet@v3`  

Essas Actions permitem integrar testes, cobertura e artefatos diretamente no GitHub Actions.

---

# 🖥️ Exercício 3 — Self‑Hosted Agent

Implementei um self‑hosted agent no Azure DevOps seguindo estes passos:

1. Criação de uma Agent Pool  
2. Download e extração do agente  
3. Configuração via `config.cmd`  
4. Execução via `run.cmd`  
5. Validação com pipeline real  

O agente está online, funcional e executando jobs corretamente.

---

# 📦 Arquivos incluídos na entrega

- `azure-pipelines.yml` — pipeline Azure DevOps  
- `.github/workflows/ci.yml` — pipeline GitHub Actions  
- `ENTREGA.md` — documentação da entrega  
- Prints do agente e pipelines (Azure DevOps e GitHub Actions)  

---

# ✔️ Conclusão

Os três exercícios foram concluídos com sucesso:

- Pipeline funcional no Azure DevOps  
- Uso de Actions do GitHub Marketplace  
- Self‑hosted agent implementado e executando jobs  

A entrega está completa e documentada..
