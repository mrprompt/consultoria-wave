# 🌊 Consultoria Wave - Website Institucional

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.consultoriawave.com&style=flat-square)](https://www.consultoriawave.com)
![Jekyll](https://img.shields.io/badge/built%20with-Jekyll-CC342D?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

Website institucional da **[Consultoria Wave](https://www.consultoriawave.com)** - especialistas em **Acústica e Vibrações** para projetos de conforto acústico, isolamento, condicionamento e soluções acústicas em Florianópolis, SC.

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como Executar Localmente](#como-executar-localmente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Atualizar o Projeto](#como-atualizar-o-projeto)
- [Como Adicionar Novos Conteúdos](#como-adicionar-novos-conteúdos)
- [Deploy](#deploy)
- [Suporte](#suporte)

---

## 🎯 Sobre o Projeto

A **Consultoria Wave** é uma empresa especializada em acústica e vibrações, oferecendo serviços de:

- ✅ Consultoria em projetos acústicos
- ✅ Avaliação acústica de ambientes
- ✅ Isolamento acústico
- ✅ Condicionamento acústico
- ✅ Mapeamento de ruído
- ✅ Sonorização profissional

Este website foi desenvolvido com **Jekyll** - um gerador de sites estáticos rápido, seguro e com suporte nativo no GitHub Pages.

### Tecnologias Utilizadas

- **Jekyll 3.9+** - Gerador de sites estáticos
- **Bootstrap 3** - Framework CSS responsivo
- **jQuery** - Biblioteca JavaScript
- **Docker/Docker Compose** - Containerização (opcional)
- **GitHub Pages** - Hospedagem

---

## 💻 Pré-requisitos

Escolha uma das opções:

### Opção 1: Com Docker (Recomendado)
- [Docker](https://docs.docker.com/install/) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

### Opção 2: Sem Docker
- **Ruby 2.5+** instalado
- **Bundler** instalado (`gem install bundler`)
- **Git** para controlar versões

---

## 🚀 Como Executar Localmente

### Opção 1: Com Docker (Recomendado - Mais Fácil)

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/consultoria-wave.git
cd consultoria-wave
```

2. Inicie o servidor com Docker Compose:
```bash
docker-compose up
```

3. Acesse no navegador:
```
http://localhost:4000
```

O servidor está configurado para recarregar automaticamente quando você fazer alterações nos arquivos.

**Para parar o servidor:**
```bash
docker-compose down
```

---

### Opção 2: Sem Docker (Instalação Local)

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/consultoria-wave.git
cd consultoria-wave
```

2. Instale as dependências:
```bash
bundle install
```

3. Inicie o servidor Jekyll:
```bash
bundle exec jekyll serve
```

4. Acesse no navegador:
```
http://localhost:4000
```

**Saída esperada:**
```
Server address: http://127.0.0.1:4000
Server running... press ctrl-c to stop.
```

---

## 📁 Estrutura do Projeto

```
consultoria-wave/
├── _config.yml                 # Configurações principais do Jekyll
├── _data/                      # Dados em YAML (clientes, avaliações, serviços, etc)
│   ├── avaliacoes.yaml        # Depoimentos e avaliações
│   ├── clientes.yaml          # Informações dos clientes
│   ├── servicos.yaml          # Lista de serviços
│   ├── slides.yaml            # Conteúdo dos slides
│   └── videos.yaml            # Vídeos para galeria
├── _includes/                  # Componentes HTML reutilizáveis
│   ├── avaliacoes.html        # Seção de avaliações
│   ├── block-clients.html     # Bloco de clientes
│   ├── block-recent-*         # Blocos de conteúdo recente
│   ├── clientes.html          # Galeria de clientes
│   ├── pagination.html        # Paginação do blog
│   └── videos.html            # Galeria de vídeos
├── _layouts/                   # Templates de página
│   ├── default.html           # Layout padrão
│   ├── page.html              # Layout para páginas
│   ├── post.html              # Layout para posts
│   └── blog.html              # Layout para blog
├── _posts/                     # Posts do blog (arquivo markdown/html)
│   └── YYYY-MM-DD-titulo.html # Posts com data no nome
├── css/                        # Estilos CSS
│   ├── style.css              # CSS customizado
│   ├── bootstrap*.css         # Bootstrap framework
│   └── colors/                # Temas de cores
├── js/                         # Scripts JavaScript
│   ├── custom.js              # Scripts customizados
│   ├── jquery*.js             # jQuery e plugins
│   └── portfolio.js           # Scripts do portfólio
├── img/                        # Imagens (clientes, portfólio, etc)
├── fonts/                      # Fontes customizadas
├── *.html                      # Páginas principais
│   ├── index.html             # Home
│   ├── servicos.html          # Serviços
│   ├── consultoria.html       # Consultoria
│   ├── estudio.html           # Estúdio
│   ├── projeto.html           # Projetos
│   ├── laudo.html             # Laudos
│   └── ...
├── docker-compose.yml         # Configuração Docker Compose
├── Gemfile                     # Dependências Ruby (se existir)
└── README.md                   # Este arquivo
```

### Principais Arquivos de Configuração

| Arquivo | Descrição |
|---------|-----------|
| `_config.yml` | Configurações globais (título, descrição, plugins, URLs) |
| `_data/*.yaml` | Dados estruturados (avaliações, clientes, serviços) |
| `Gemfile` | Dependências Ruby (se houver) |
| `docker-compose.yml` | Configuração para rodar com Docker |

---

## ✏️ Como Atualizar o Projeto

### 1. Atualizando Conteúdo

**Para atualizar páginas existentes** (como Serviços, Consultoria, etc):
1. Edite o arquivo `.html` desejado na raiz ou em `_includes/`
2. Faça as alterações necessárias
3. Salve e veja a mudança automática no servidor local (http://localhost:4000)

**Para atualizar dados estruturados** (clientes, avaliações, serviços):
1. Edite o arquivo `.yaml` correspondente em `_data/`
2. Exemplo: Para adicionar um novo cliente, edite `_data/clientes.yaml`
3. Seguir o formato YAML existente
4. Salve e recarregue a página

### 2. Atualizando Estilos

- **CSS Global**: Edite `css/style.css`
- **CSS Específico**: Edite os arquivos CSS em `css/` conforme necessário
- **Tema de Cores**: Modifique os arquivos em `css/colors/`

### 3. Atualizando Scripts

- **Scripts Customizados**: Edite `js/custom.js`
- **Scripts Específicos**: Edite os arquivos em `js/` conforme necessário

### 4. Atualizando Configurações Globais

Edite `_config.yml` para:
```yaml
title: Novo Título
description: Nova descrição
url: "https://novo-dominio.com"
empresa:
  telefone: ...
  email: ...
  social:
    facebook: ...
    instagram: ...
```

### 5. Atualizando Dependências

Se usando Docker:
```bash
docker-compose pull  # Atualiza a imagem Docker
docker-compose up    # Reinicia com a nova versão
```

Se usando instalação local:
```bash
bundle update        # Atualiza as gems
bundle exec jekyll serve
```

---

## 📝 Como Adicionar Novos Conteúdos

### Adicionar um Novo Post no Blog

1. Crie um arquivo em `_posts/` com o padrão:
```
_posts/YYYY-MM-DD-titulo-da-postagem.html
```

2. Adicione o YAML Front Matter no início:
```html
---
layout: post
title: "Título do Post"
description: "Descrição breve do post"
date: 2026-03-19
categories: [acustica, consultoria]
---

<p>Conteúdo do post em HTML...</p>
```

3. Salve e o post aparecerá automaticamente no blog

### Adicionar um Novo Serviço

1. Edite `_data/servicos.yaml`
2. Adicione uma entrada seguindo o formato existente
3. Edite `servicos.html` se necessário para incluir o novo serviço no layout

### Adicionar uma Nova Avaliação

1. Edite `_data/avaliacoes.yaml`
2. Adicione uma entrada com nome, cargo, texto e foto do cliente
3. Será exibida automaticamente na seção de avaliações

### Adicionar um Novo Cliente

1. Edite `_data/clientes.yaml`
2. Adicione o cliente com logo/imagem
3. Será exibido automaticamente na galeria de clientes

### Adicionar Imagens

1. Salve a imagem em `img/` (criar subpasta se necessário)
2. Use em HTML com:
```html
<img src="/img/pasta/imagem.jpg" alt="Descrição">
```

---

## 🌐 Deploy

### Opção 1: GitHub Pages (Automático)

1. Faça push para o repositório:
```bash
git add .
git commit -m "Descrição das alterações"
git push origin main
```

2. GitHub Pages compilará automaticamente e publicará

### Opção 2: Hosting Próprio

1. Compile o site:
```bash
bundle exec jekyll build
```

2. Copie a pasta `_site/` gerada para seu servidor web

3. Configure o servidor para servir os arquivos HTML

---

## 🐛 Troubleshooting / Solução de Problemas

### Página não atualiza após alteração
- **Docker**: Os containers às vezes não recarregam automaticamente. Tente parar (`docker-compose down`) e iniciar novamente (`docker-compose up`)
- **Local**: Recarregue a página no navegador (Ctrl+F5 ou Cmd+Shift+R para limpar cache)

### Erro: "Gemfile not found"
- Crie um `Gemfile` na raiz do projeto com:
```ruby
source "https://rubygems.org"
gem "jekyll", "~> 3.8.0"
gem "jekyll-sitemap"
gem "jekyll-paginate"
gem "jekyll-feed"
```

### Erro: "Port 4000 already in use"
- **Docker**: Mude a porta em `docker-compose.yml`
- **Local**: Mude a porta com `jekyll serve --port 5000`

### Imagens não aparecem
- Certifique-se que o caminho está correto (use `/img/...` com `/` no início)
- Verifique se o arquivo existe em `img/`

---

## 📞 Suporte e Contato

Contato da Consultoria Wave:
- **Telefone**: +55 48 99907-6388
- **Email**: contato@consultoriawave.com
- **Facebook**: [CONSULTORIAWAVE](https://facebook.com/CONSULTORIAWAVE)
- **Instagram**: [@waveconsultoria](https://instagram.com/waveconsultoria)
- **Endereço**: Av. Santa Catarina, n° 1619, Balneário, Florianópolis SC

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja LICENSE para detalhes.

---

**Atualizado em**: 19 de março de 2026

