
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SetupInstructions = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Configuração Docker</CardTitle>
        <CardDescription>
          Guia rápido para rodar sua API de pagamentos com Docker
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold">1. Obtenha sua chave de API do Stripe</h3>
          <p className="text-sm text-muted-foreground">
            Crie uma conta no Stripe e obtenha suas chaves de API no painel.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">2. Crie o Dockerfile</h3>
          <div className="bg-muted rounded-md p-3 font-mono text-xs">
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
          <h3 className="font-semibold">3. Construa e execute o container</h3>
          <div className="bg-muted rounded-md p-3 font-mono text-xs">
            <pre>
              {`# Construa a imagem
docker build -t payment-api .

# Execute o container
docker run -p 3000:3000 payment-api`}
            </pre>
          </div>
        </div>
        
        <div className="flex justify-center mt-4">
          <Button className="bg-stripe-purple hover:bg-opacity-90" onClick={() => window.open("https://stripe.com/docs/api", "_blank")}>
            Documentação da API Stripe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SetupInstructions;
