import Header from "@/components/Header";
import PaymentForm from "@/components/PaymentForm";
import TransactionsList from "@/components/TransactionsList";
import StatsOverview from "@/components/StatsOverview";
import SetupInstructions from "@/components/SetupInstructions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
   <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-tr-full blur-3xl"></div>
      
   <Header />
 <main className="container mx-auto py-8 px-4 relative z-10">
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
 <footer className="py-6 border-t border-yellow-500/30 mt-8 relative z-10">
  <div className="container mx-auto px-4 text-center text-sm text-yellow-300">
  Pay-Dock ©2025 - ferramenta simples para testes de integração com stripe
   </div>
      </footer>
    </div>
  );
};

export default Index;