#!/bin/bash
# Apenas salvando como criei o projeto
npm init -y # -y para não precisar responder as perguntas
npm install --save-dev typescript
npx tsc --init # --init para criar o arquivo tsconfig.json
npm install express --save
npm install -save-dev @types/express