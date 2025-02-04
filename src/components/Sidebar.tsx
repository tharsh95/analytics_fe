export function Sidebar() {
  return (
    <div className=" bg-gray-100 shadow-md min-h-screen p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Salesway</h2>
      <nav>
        <ul className="space-y-4">
          <li className="font-medium text-gray-500 hover:text-blue-500 cursor-pointer">Settings</li>
          <li className="font-medium text-gray-500 hover:text-blue-500 cursor-pointer">Team</li>
          <h3 className="text-sm font-semibold mt-4 mb-2 text-gray-600">MENU</h3>
          <li className="font-medium text-gray-500 hover:text-blue-500 cursor-pointer">Dashboard</li>
          <li className="font-medium text-gray-500 hover:text-blue-500 cursor-pointer">Campaigns</li>
          <li className="font-medium text-gray-500 hover:text-blue-500 cursor-pointer">Flows</li>
          <li className="font-medium text-gray-500 hover:text-blue-500 cursor-pointer">Integrations</li>
          <li className="font-medium text-gray-500 hover:text-blue-500 cursor-pointer">Customers</li>
        </ul>
      </nav>
    </div>
  );
}
