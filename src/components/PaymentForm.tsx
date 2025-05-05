
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const PaymentForm = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState<string>("19,99");
  const [currency, setCurrency] = useState<string>("brl");
  const [loading, setLoading] = useState<boolean>(false);
  const { addTransaction } = useContext(TransactionContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular chamada de API
    setTimeout(() => {
      setLoading(false);
      
      // Criar nova transação
      const newTransaction = {
        id: "tx_" + Math.random().toString(36).substr(2, 9),
        amount: amount,
        currency: "BRL",
        date: new Date().toLocaleDateString("pt-BR") + " " + new Date().toLocaleTimeString("pt-BR"),
        status: "success" as const
      };
      
      // Adicionar a transação à lista
      addTransaction(newTransaction);
      
      toast({
        title: "Pagamento processado",
        description: `Pagamento de R$ ${amount} processado com sucesso`,
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Processar Pagamento</CardTitle>
        <CardDescription>
          Teste sua integração com o Stripe simulando um pagamento.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Valor</Label>
              <Input
                id="amount"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="19,99"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="currency">Moeda</Label>
              <Select
                value={currency}
                onValueChange={(value) => setCurrency(value)}
              >
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Selecione a moeda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brl">BRL (Real)</SelectItem>
                  <SelectItem value="usd">USD (Dólar)</SelectItem>
                  <SelectItem value="eur">EUR (Euro)</SelectItem>
                  <SelectItem value="gbp">GBP (Libra)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button 
            className="w-full mt-6 bg-stripe-purple hover:bg-opacity-90" 
            type="submit"
            disabled={loading}
          >
            {loading ? "Processando..." : "Processar Pagamento"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
