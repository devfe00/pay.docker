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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const PaymentForm = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState<string>("29,99");
const [currency, setCurrency] = useState<string>("brl");
const [loading, setLoading] = useState<boolean>(false);
  const { addTransaction } = useContext(TransactionContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      
      const newTransaction = {
        id: "tx_" + Math.random().toString(36).substr(2, 9),
       amount: amount,
    currency: "BRL",
      date: new Date().toLocaleDateString("pt-BR") + " " + new Date().toLocaleTimeString("pt-BR"),
        status: "success" as const
      };
      
      addTransaction(newTransaction);
      
      toast({
        title: "Pagamento processado",
        description: `Pagamento de R$ ${amount} processado com sucesso`,
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800 border border-yellow-500/30 shadow-lg">
      <CardHeader className="border-b border-yellow-500/20">
        <CardTitle className="text-yellow-400">Processar Pagamento</CardTitle>
        <CardDescription className="text-gray-300">
          Teste sua integração com o Stripe simulando um pagamento.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="amount" className="text-gray-200">Valor</Label>
              <Input
    id="amount"
        type="text"
      value={amount}
     onChange={(e) => setAmount(e.target.value)}
       placeholder="29,99"
    required
                className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400/20"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="currency" className="text-gray-200">Moeda</Label>
              <Select
      value={currency}
     onValueChange={(value) => setCurrency(value)}
              >
     <SelectTrigger id="currency" className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400/20">
     <SelectValue placeholder="Selecione a moeda" />
         </SelectTrigger>
    <SelectContent className="bg-gray-800 border-yellow-500/30 text-white">
                  <SelectItem value="brl" className="focus:bg-gray-700 focus:text-yellow-400">BRL (Real)</SelectItem>
       <SelectItem value="usd" className="focus:bg-gray-700 focus:text-yellow-400">USD (Dólar)</SelectItem>
         <SelectItem value="eur" className="focus:bg-gray-700 focus:text-yellow-400">EUR (Euro)</SelectItem>
   <SelectItem value="gbp" className="focus:bg-gray-700 focus:text-yellow-400">GBP (Libra)</SelectItem>
            </SelectContent>
        </Select>
            </div>
     </div>
    <Button 
      className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
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