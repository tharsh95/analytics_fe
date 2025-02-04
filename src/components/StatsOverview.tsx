import useFetchData from '../hooks/useFetchData';
import StatCard from './StatCard';
import StatCardSkeleton from './StatCardSkeleton';

interface StatsData {
  purchases: number;
  revenue: number;
  refunds: number;
}

const StatsOverview = () => {
  // Ensure useFetchData is typed properly
  const { data, loading, error } = useFetchData<StatsData>("http://3.111.196.92:8020/api/v1/sample_assignment_api_1/");

  if (loading) {
    return (
      <div className="flex mt-8">
        {[1, 2, 3].map((el) => (
          <StatCardSkeleton key={el} />
        ))}
      </div>
    );
  } 
  if (error) return <div>Error: {error.message}</div>;

  // Ensure safe access with default values
  const { purchases = 0, revenue = 0, refunds = 0 } = data || {};

  return (
    <div className="flex justify-around mt-8">
      <StatCard title="Purchases" value={purchases} trend="up" tvalue="32%" />
      <StatCard title="Revenue" value={revenue} trend="up" tvalue="48%" />
      <StatCard title="Refunds" value={refunds} trend="down" tvalue="7%" />
    </div>
  );
}

export default StatsOverview;
