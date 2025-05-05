
import React, { createContext, useState, ReactNode } from "react";

export interface Transaction {
  id: string;
  amount: string;
  currency: string;
  date: string;
  status: "success" | "pending" | "failed";
}

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

const initialTransactions: Transaction[] = [
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

export const TransactionContext = createContext<TransactionContextType>({
  transactions: initialTransactions,
  addTransaction: () => {}
});

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const addTransaction = (transaction: Transaction) => {
    setTransactions(prev => [transaction, ...prev]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
