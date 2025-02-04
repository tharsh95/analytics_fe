
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetch from "@/hooks/useFetch";


interface Products {
  id:string;
  product: string;
  sold_amount: number;
  unit_price: number;
  revenue: number;
  rating: number;
}

function TopProducts() {
  const { data, loading, error } = useFetch<Products[]>(`${import.meta.env.VITE_BE_URL}/six`);
  console.log(data, "kk");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="mt-4">
      <h1 className="p-6 font-extrabold text-xl">Top Products</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product</TableHead>
            <TableHead>Sold Amount</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead className="text-right">Revenue</TableHead>
            <TableHead className="text-right">Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((el) => (
            <TableRow key={el.id}>
              <TableCell className="font-medium">{el.product}</TableCell>
              <TableCell>{el.sold_amount}</TableCell>
              <TableCell>{el.unit_price}</TableCell>
              <TableCell className="text-right">
                {el.revenue}
              </TableCell>
              <TableCell className="text-right">
                {el.rating}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    </div>
  );
}
export default TopProducts;
