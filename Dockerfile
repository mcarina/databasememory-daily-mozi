# Usa uma imagem oficial do Node.js como base
FROM node:20-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia apenas os arquivos de dependências primeiro para aproveitar o cache do Docker
COPY package.json package-lock.json ./

# Instala as dependências sem criar arquivos desnecessários
RUN npm install --production

# Agora copia o restante dos arquivos
COPY . .

# Expõe a porta do servidor
EXPOSE 3333

# Comando para iniciar o servidor
CMD ["npm", "start"]
