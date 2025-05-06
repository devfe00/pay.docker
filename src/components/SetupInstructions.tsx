import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SetupInstructions = () => {
  return (
    <Card className="w-full bg-gray-800 border border-yellow-500/30 shadow-lg">
      <CardHeader className="border-b border-yellow-500/20">
        <CardTitle className="text-yellow-400">Configuração Docker</CardTitle>
   <CardDescription className="text-gray-300">
         Guia rápido para rodar sua API de pagamentos com Docker
     </CardDescription>
      </CardHeader>
  <CardContent className="space-y-4 pt-6">
     <div className="space-y-2">
     <h3 className="font-semibold text-gray-200">1. Obtenha sua chave de API do Stripe</h3>
      <p className="text-sm text-gray-400">
       Crie uma conta no Stripe e obtenha suas chaves de API no painel.
       </p>
      </div>
        
        <div className="space-y-2">
    <h3 className="font-semibold text-gray-200">2. Crie o Dockerfile</h3>
   <div className="bg-gray-900 rounded-md p-3 font-mono text-xs text-gray-300 border border-gray-700">
     <pre>
              {`# Use a imagem base do Node.js
FROM node:14

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos package.json e .env
COPY package*.json ./
COPY .env ./

# Instale as dependências
RUN npm install

# Copie os arquivos do projeto
COPY . .

# Exponha a porta
EXPOSE 3000

# Inicie a aplicação
CMD ["node", "server.js"]`}
            </pre>
          </div>
        </div>
        
        <div className="space-y-2">
  <h3 className="font-semibold text-gray-200">3. Construa e execute o container</h3>
   <div className="bg-gray-900 rounded-md p-3 font-mono text-xs text-gray-300 border border-gray-700">
            <pre>
              {`# Construa a imagem
docker build -t payment-api .

# Execute o container
docker run -p 3000:3000 payment-api`}
            </pre>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <Button 
    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
   onClick={() => window.open("https://stripe.com/docs/api", "_blank")}
   >
     Documentação da API Stripe
   </Button>
        </div>
   </CardContent>
    </Card>
  );
};

export default SetupInstructions;