import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Skeleton from "@/components/ui/skeleton";

 function ComparisonChartSkeleton() {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>
          <Skeleton width="100px" height="20px" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-96 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="flex justify-around gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            <Skeleton width="60px" height="16px" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            <Skeleton width="60px" height="16px" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default ComparisonChartSkeleton