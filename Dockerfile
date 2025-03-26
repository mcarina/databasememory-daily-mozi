# Use uma imagem base com Node.js
FROM node:lts-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos do projeto para dentro do contêiner
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código do aplicativo
COPY . .

# Expõe a porta do servidor
EXPOSE 3333

# Comando para iniciar o servidor
CMD ["npm", "start"]
