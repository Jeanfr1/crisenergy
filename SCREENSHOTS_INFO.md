# Instruções para Adicionar Screenshots ao README

O README.md faz referência a várias imagens que precisam ser adicionadas ao diretório `public/assets/` para que sejam exibidas corretamente no GitHub.

## Screenshots Necessários

Por favor, adicione as seguintes imagens ao diretório `public/assets/`:

1. `logo.png` - Logo da CRIS ENERGY
2. `screenshot-hero.png` - Captura de tela da seção Hero
3. `screenshot-solutions.png` - Captura de tela da seção Soluções
4. `screenshot-benefits.png` - Captura de tela da seção Benefícios
5. `screenshot-simulator.png` - Captura de tela da seção Simulador
6. `screenshot-mobile.png` - Captura de tela da versão mobile do site

## Como Capturar as Screenshots

Para capturar as screenshots do site:

1. Execute o servidor de desenvolvimento com `npm run dev`
2. Acesse `http://localhost:3000` no seu navegador
3. Use a ferramenta de captura de tela do seu sistema operacional ou extensões do navegador para capturar cada seção
4. Para a versão mobile, use as ferramentas de desenvolvedor do navegador (F12) e ative o modo de visualização responsiva

## Após Adicionar as Screenshots

Depois de adicionar todas as imagens ao diretório `public/assets/`, faça um novo commit e push para o GitHub:

```bash
git add public/assets/
git commit -m "docs: add screenshots for README"
git push
```

Isso garantirá que o README.md seja exibido corretamente no GitHub com todas as imagens.
