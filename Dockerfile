# Use uma imagem base do Node.js
FROM node:14-alpine

# Crie um diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do pacote do seu projeto para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do seu projeto para o diretório de trabalho
COPY . .

# Construa o aplicativo React
RUN npm run build

# Expõe a porta 3000 para o aplicativo React
EXPOSE 3000

# Define o comando padrão para iniciar o aplicativo quando o contêiner for iniciado
CMD [ "npm", "start" ]
