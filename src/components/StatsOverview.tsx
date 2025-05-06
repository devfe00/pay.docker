import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatsOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-gray-800 border border-yellow-500/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-yellow-500/20">
  <CardTitle className="text-sm font-medium text-yellow-400">Receita Total</CardTitle>
    </CardHeader>
        <CardContent className="pt-4">
    <div className="text-2xl font-bold text-white">R$ 1.229,99</div>
 <p className="text-xs text-green-400">+20% do mês passado</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border border-yellow-500/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-yellow-500/20">
   <CardTitle className="text-sm font-medium text-yellow-400">Transações</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
      <div className="text-2xl font-bold text-white">+12</div>
    <p className="text-xs text-green-400">+3 desde ontem</p>
     </CardContent>
    </Card>
  <Card className="bg-gray-800 border border-yellow-500/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
   <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-yellow-500/20">
       <CardTitle className="text-sm font-medium text-yellow-400">Taxa de Sucesso</CardTitle>
   </CardHeader>
  <CardContent className="pt-4">
     <div className="text-2xl font-bold text-white">98,2%</div>
    <p className="text-xs text-green-400">+2,1% do mês passado</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsOverview;