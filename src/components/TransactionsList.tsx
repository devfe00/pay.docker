import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const TransactionsList = () => {
  const { transactions } = useContext(TransactionContext);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-400 bg-green-900/40";
      case "pending":
        return "text-yellow-400 bg-yellow-900/40";
      case "failed":
        return "text-red-400 bg-red-900/40";
      default:
        return "text-gray-400 bg-gray-700/40";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "success":
        return "sucesso";
      case "pending":
        return "pendente";
      case "failed":
        return "falhou";
      default:
        return status;
    }
  };

  return (
    <Card className="w-full bg-gray-800 border border-yellow-500/30 shadow-lg">
      <CardHeader className="border-b border-yellow-500/20">
        <CardTitle className="text-yellow-400">Transações Recentes</CardTitle>
        <CardDescription className="text-gray-300">
   Suas transações de pagamento mais recentes
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="rounded-md border border-gray-700">
          <table className="w-full text-sm">
     <thead>
       <tr className="border-b border-gray-700 bg-gray-900/50">
     <th className="py-2 px-4 text-left font-medium text-gray-300">ID</th>
       <th className="py-2 px-4 text-left font-medium text-gray-300">Valor</th>
      <th className="py-2 px-4 text-left font-medium text-gray-300">Data</th>
    <th className="py-2 px-4 text-left font-medium text-gray-300">Status</th>
     </tr>
    </thead>
     <tbody>
     {transactions.map((transaction) => (
  <tr key={transaction.id} className="border-b border-gray-700">
       <td className="py-2 px-4 font-mono text-xs text-gray-400">{transaction.id}</td>
      <td className="py-2 px-4 text-gray-200">R$ {transaction.amount}</td>
     <td className="py-2 px-4 text-gray-200">{transaction.date}</td>
       <td className="py-2 px-4">
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
     {getStatusText(transaction.status)}
       </span>
    </td>
      </tr>
   ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsList;