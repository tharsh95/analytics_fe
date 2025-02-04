const StatCardSkeleton = () => {
    return (
    <div 
    className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg w-1/3 min-h-[100px] flex flex-col animate-pulse"
    >
      {/* Title Skeleton */}
      <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>

      {/* Value & Trend Skeleton */}
      <div className="flex items-center mt-2">
        <div className="h-8 w-16 bg-gray-300 rounded"></div>
        <div className="ml-3 h-6 w-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default StatCardSkeleton;
