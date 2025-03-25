# Use uma imagem base com Node.js
FROM node:lts-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e package-lock.json para o container
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto para dentro do container
COPY . .

# Expõe a porta que o app vai rodar
EXPOSE 3333

# Comando para rodar a aplicação
CMD ["npm", "start"]
