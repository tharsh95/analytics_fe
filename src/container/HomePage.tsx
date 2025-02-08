import CommunityFeedback from '@/components/CommunityFeedback'
import { ComparisonChart } from '@/components/ComparisonChart'
import { Device } from '@/components/Device'
import PerformanceScore from '@/components/PerformanceScore'
import { Sidebar } from '@/components/Sidebar'
import StatsOverview from '@/components/StatsOverview'
import TopProducts from '@/components/TopProducts'

const HomePage = () => {
  return (
    <div className="flex p-4 bg-white gap-4"> {/* Ensures even spacing between sections */}
      {/* Sidebar */}
      <div className="w-1/6">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="bg-white shadow-2xl rounded-lg w-4/6 flex flex-col border-2 border-gray-200 p-4 space-y-4">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <StatsOverview />

        {/* Wrapped ComparisonChart and TopProducts */}
        <div className="space-y-4 border-2 border-gray-200 rounded-lg p-4 bg-white">
          <ComparisonChart />
        </div>
        <div className="space-y-4 border-2 border-gray-200 rounded-lg p-4 bg-white">
          <TopProducts />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-2/6 flex flex-col space-y-4 h-full"> {/* Adds spacing between stacked cards */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <PerformanceScore />
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <Device />
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <CommunityFeedback />
        </div>
      </div>
    </div>
  );
};



export default HomePage