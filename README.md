# Proposta Factorial × SIMO

Microsite da proposta comercial (React + Vite + Tailwind). Idioma: **português de Portugal**. Os valores no site são o **acordo SIMO** (USD mensais: PEPM, ATS Business e Factorial One), não uma lista ROW genérica.

## Como ver localmente (no computador)

**Passo 1 — Instalar Node.js** (se ainda não tiver): descarregue em [nodejs.org](https://nodejs.org) (versão LTS).

**Passo 2 — Abrir a pasta do projeto** no terminal (nesta pasta).

**Passo 3 — Instalar dependências** (só precisa fazer uma vez):

```sh
npm install
```

**Passo 4 — Arrancar o site em modo desenvolvimento**:

```sh
npm run dev
```

**Passo 5 — Abrir no browser**: o endereço aparece no terminal. Como o projeto usa o caminho base `/simo/`, abra por exemplo:

`http://localhost:8080/simo/`

## Gerar a versão final (build)

```sh
npm run build
```

O resultado fica na pasta `dist/`.

## Publicar no GitHub Pages (deploy automático)

O repositório inclui [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Cada `git push` para a branch `main` faz build e publica o site.

**Passo 1 — No GitHub**, abra o repositório **simo** → **Settings** → **Pages**.

**Passo 2 — Em “Build and deployment” → “Source”**, escolha **GitHub Actions** (não “Deploy from a branch”).

**Passo 3 — Fazer push** do código para `main`. Quando o workflow ficar verde, o site estará disponível em:

**https://victorhgutierrez-cloud.github.io/simo/**

Se vir uma página em branco, confirme que abriu o URL **com** `/simo/` no fim — o Vite está configurado com `base: "/simo/"` em [`vite.config.ts`](vite.config.ts).

## Onde está o conteúdo da proposta

- Texto principal (scroll): [`src/components/proposal/ProposalFlow.tsx`](src/components/proposal/ProposalFlow.tsx)
- Preços e constantes (lugares, bundle, desconto): [`src/utils/constants.ts`](src/utils/constants.ts)

## Tecnologias

- Vite, TypeScript, React, Tailwind CSS, componentes shadcn-ui
