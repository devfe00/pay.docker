
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SetupInstructions = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Docker Setup</CardTitle>
        <CardDescription>
          Quick guide to get your payment API running with Docker
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold">1. Get your Stripe API key</h3>
          <p className="text-sm text-muted-foreground">
            Create a Stripe account and get your API keys from the dashboard.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">2. Create Dockerfile</h3>
          <div className="bg-muted rounded-md p-3 font-mono text-xs">
            <pre>
              {`# Use Node.js image
FROM node:14

# Create working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "server.js"]`}
            </pre>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">3. Build and run container</h3>
          <div className="bg-muted rounded-md p-3 font-mono text-xs">
            <pre>
              {`# Build image
docker build -t payment-api .

# Run container
docker run -p 3000:3000 payment-api`}
            </pre>
          </div>
        </div>
        
        <div className="flex justify-center mt-4">
          <Button className="bg-stripe-purple hover:bg-opacity-90" onClick={() => window.open("https://stripe.com/docs/api", "_blank")}>
            Stripe API Documentation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SetupInstructions;
