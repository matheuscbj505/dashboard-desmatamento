# Documentação da Arquitetura

## 1. Escolhas de Tecnologias

- **Frontend**: React (interface interativa com gráficos e filtros)
- **Backend**: Django + Django Rest Framework (API para processar os dados)
- **Banco de Dados**: SQLite (armazenamento local)
- **APIs Externas**: INPE, MapBiomas (fontes de dados públicos)

---

### Nível 2 - Diagrama de Contexto (C4)

```mermaid
graph TD
    Cidadao[Cidadão Brasileiro] -->|Visualiza dados| Sistema
    Pesquisador[Pesquisador/Analista] -->|Realiza análises| Sistema
    Sistema[Sistema de Monitoramento de Desmatamento]
    Sistema -->|Busca dados| API_INPE[API Pública - INPE/MapBiomas]
    Sistema -->|É hospedado em| Plataforma[Plataforma de Hospedagem - Render/Vercel]

    Sistema -->|É hospedado em| Plataforma[Plataforma de Hospedagem (Render/Vercel)]
