PROJETO ONG ESPERANCA. EXPERIENCIAS PRATICAS

Prazo oficial: 01/10/2026 as 23h59 (BRT)
Aluna: Sthephany dos Santos Freire (RGM 48707074)
Repositorio: https://github.com/sthephanysfreire/atividade-projeto-ong

## Como abrir localmente
1. Na pasta do projeto: python -m http.server 8765 --bind 127.0.0.1
2. Multipagina (EP1/EP2): http://127.0.0.1:8765/index.html
3. SPA (EP3): http://127.0.0.1:8765/app.html
4. Entrada estruturada EP3: http://127.0.0.1:8765/html/app.html

## Estrutura
- html/app.html: entrada SPA (copia alinhada a separacao de pastas)
- css/style.css: design system e componentes
- imagens/: midia institucional
- js/: storage, ui, templates, router, forms, app
- index.html, projetos.html, cadastro.html: multipagina EP1/EP2
- style.css, script.js: estilos e interacoes multipagina
- feedback-demo.html e screenshots/: apoio as capturas

## GitFlow (EP4)
- main: estavel
- develop: integracao
- feature/*: funcionalidades (ex.: feature/spa-ep3)

## Acessibilidade (resumo WCAG 2.1)
- lang=pt-BR, alt em imagens, labels em formularios
- aria-expanded/controls no menu, aria-current, aria-live, role=dialog

## Deploy
- Site estatico. Publicar a pasta do repositorio em GitHub Pages ou host estatico equivalente.

## Status DreamShaper
- EP1: 100%
- EP2: 100%
- EP3: 100%
- EP4: 100%
