import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';  // Import the Widget component

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6 ml-64">
          <h1 className="text-3xl font-semibold text-blue-800 mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dynamic Widgets */}
            <Widget title="Real-time Users" type="realTimeUsers" />
            <Widget title="Sales Data" type="salesData" />
            <Widget title="Performance Metrics" type="performanceMetrics" />
            {/* Add more widgets as needed */}
          </div>
        </main>
      </div>
    </div>
  );
}
