
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  id: string;
  amount: string;
  currency: string;
  date: string;
  status: "success" | "pending" | "failed";
}

const TransactionsList = () => {
  // Dados de exemplo para demonstração
  const transactions: Transaction[] = [
    {
      id: "tx_123456789",
      amount: "19,99",
      currency: "BRL",
      date: "05/05/2025 10:30:15",
      status: "success"
    },
    {
      id: "tx_987654321",
      amount: "49,99",
      currency: "BRL",
      date: "04/05/2025 15:22:45",
      status: "success"
    },
    {
      id: "tx_456789123",
      amount: "9,99",
      currency: "BRL",
      date: "03/05/2025 09:15:30",
      status: "failed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-600 bg-green-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "failed":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Transações Recentes</CardTitle>
        <CardDescription>
          Suas transações de pagamento mais recentes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="py-2 px-4 text-left font-medium">ID</th>
                <th className="py-2 px-4 text-left font-medium">Valor</th>
                <th className="py-2 px-4 text-left font-medium">Data</th>
                <th className="py-2 px-4 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-2 px-4 font-mono text-xs">{transaction.id}</td>
                  <td className="py-2 px-4">R$ {transaction.amount}</td>
                  <td className="py-2 px-4">{transaction.date}</td>
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
