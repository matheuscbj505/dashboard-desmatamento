# Documentação da Arquitetura

## 1. Escolhas de Tecnologias

- **Frontend**: React (interface interativa com gráficos e filtros)
- **Backend**: Django + Django Rest Framework (API para processar os dados)
- **Banco de Dados**: SQLite (armazenamento local)
- **APIs Externas**: INPE, MapBiomas (fontes de dados públicos)

---

### Nível 2 - Diagrama de Contêineres

```mermaid
graph TD
    Usuario[Usuário do Sistema] --> Frontend
    Frontend[Frontend - React]
    Backend[Backend - Django + DRF]
    DB[Banco de Dados - SQLite]
    API[API Pública - INPE ou MapBiomas]

    Frontend -->|Chama| Backend
    Backend -->|Lê/Grava| DB
    Backend -->|Busca dados| API
