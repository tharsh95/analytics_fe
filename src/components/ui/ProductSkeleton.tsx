import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import Skeleton from "@/components/ui/skeleton";
  
  function TopProductsSkeleton() {
    return (
      <div className="mt-4">
        <h1 className="p-6 font-extrabold text-xl">
          <Skeleton width="150px" height="24px" />
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Skeleton width="80px" height="20px" />
              </TableHead>
              <TableHead>
                <Skeleton width="100px" height="20px" />
              </TableHead>
              <TableHead>
                <Skeleton width="100px" height="20px" />
              </TableHead>
              <TableHead className="text-right">
                <Skeleton width="100px" height="20px" />
              </TableHead>
              <TableHead className="text-right">
                <Skeleton width="100px" height="20px" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <Skeleton width="120px" height="20px" />
                </TableCell>
                <TableCell>
                  <Skeleton width="80px" height="20px" />
                </TableCell>
                <TableCell>
                  <Skeleton width="80px" height="20px" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton width="100px" height="20px" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton width="60px" height="20px" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  
  export default TopProductsSkeleton;
  