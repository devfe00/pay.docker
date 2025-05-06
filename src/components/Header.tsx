import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const { toast } = useToast();
  
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-yellow-500 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <div className="flex items-center">
   <h1 className="text-xl font-bold text-yellow-400">Pay Dock💲</h1>
     </div>
    <div>
      <Button
     variant="outline"
    className="mr-2 border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
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
 className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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