
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  id: string;
  amount: string;
  currency: string;
  date: string;
  status: "success" | "pending" | "failed";
}

const TransactionsList = () => {
  // Sample data for demonstration
  const transactions: Transaction[] = [
    {
      id: "tx_123456789",
      amount: "19.99",
      currency: "USD",
      date: "2025-05-05 10:30:15",
      status: "success"
    },
    {
      id: "tx_987654321",
      amount: "49.99",
      currency: "USD",
      date: "2025-05-04 15:22:45",
      status: "success"
    },
    {
      id: "tx_456789123",
      amount: "9.99",
      currency: "EUR",
      date: "2025-05-03 09:15:30",
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

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          Your most recent payment transactions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="py-2 px-4 text-left font-medium">ID</th>
                <th className="py-2 px-4 text-left font-medium">Amount</th>
                <th className="py-2 px-4 text-left font-medium">Date</th>
                <th className="py-2 px-4 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-2 px-4 font-mono text-xs">{transaction.id}</td>
                  <td className="py-2 px-4">{transaction.amount} {transaction.currency}</td>
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
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
