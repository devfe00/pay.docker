
import Header from "@/components/Header";
import PaymentForm from "@/components/PaymentForm";
import TransactionsList from "@/components/TransactionsList";
import StatsOverview from "@/components/StatsOverview";
import SetupInstructions from "@/components/SetupInstructions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <StatsOverview />
            <PaymentForm />
          </div>
          <div className="flex flex-col gap-6">
            <TransactionsList />
            <SetupInstructions />
          </div>
        </div>
      </main>
      <footer className="py-6 border-t mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          Stripe Pay Dock © 2025 - Uma ferramenta simples para testes de integração com Stripe
        </div>
      </footer>
    </div>
  );
};

export default Index;
