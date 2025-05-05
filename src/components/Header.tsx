
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const { toast } = useToast();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-stripe-dark">Stripe Pay Dock</h1>
        </div>
        <div>
          <Button 
            variant="outline" 
            className="mr-2"
            onClick={() => {
              toast({
                title: "Documentação",
                description: "Consulte a documentação Docker para instruções de configuração."
              });
            }}
          >
            Docs
          </Button>
          <Button
            className="bg-stripe-purple hover:bg-opacity-90"
            onClick={() => {
              toast({
                title: "Precisa de ajuda?",
                description: "Entre em contato através de suporte@stripedock.com"
              });
            }}
          >
            Suporte
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
