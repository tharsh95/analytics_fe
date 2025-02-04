interface StatCardProps {
  title: string;
  value: number;
  trend?: "up" | "down"; // Optional, must be "up" or "down"
  tvalue?: string; // Optional percentage change value
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, tvalue }) => {
  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg w-1/3 min-h-[100px] flex flex-col">
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-500">{title}</h3>

      {/* Value & Trend Indicator */}
      <div className="flex items-center mt-2">
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        {trend && (
          <div
            className={`ml-3 px-2 py-1 rounded-full text-sm font-semibold border border-gray-400 ${
              trend === "up"
                ? "bg-green-200 text-green-500"
                : "bg-red-200 text-red-500"
            }`}
          >
            {tvalue}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
