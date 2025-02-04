import CommunityFeedback from '@/components/CommunityFeedback'
import { ComparisonChart } from '@/components/ComparisonChart'
import { Device } from '@/components/Device'
import PerformanceScore from '@/components/PerformanceScore'
import { Sidebar } from '@/components/Sidebar'
import StatsOverview from '@/components/StatsOverview'
import TopProducts from '@/components/TopProducts'

const HomePage = () => {
  return (
    <div className="flex min-h-screen p-4 bg-white">
    <div className="w-1/6 ">
      <Sidebar />
    </div>
    <div className="bg-white shadow-2xl rounded-lg w-4/6 flex flex-col">
    <h1 className="font-bold text-3xl m-4">Dashboard</h1>
      <div className="flex-1 "><StatsOverview /></div>
    <div className=" bg-white border-2 border-gray-200 rounded-lg"><ComparisonChart /></div>
      <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg"><TopProducts /></div>
    </div>
    <div className="ml-4 w-2/6 flex flex-col space-y-4">
      <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-4"><PerformanceScore/></div>
      <div className=" bg-white rounded-lg"><Device/></div>
      <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg"><CommunityFeedback/></div>
    </div>
  </div>
  )
}

export default HomePage