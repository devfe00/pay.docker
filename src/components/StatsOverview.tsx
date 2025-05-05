
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatsOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 1.229,99</div>
          <p className="text-xs text-muted-foreground">+20% do mês passado</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Transações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12</div>
          <p className="text-xs text-muted-foreground">+3 desde ontem</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">98,2%</div>
          <p className="text-xs text-muted-foreground">+2,1% do mês passado</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsOverview;
