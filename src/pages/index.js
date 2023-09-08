import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6 ml-64">
          <h1 className="text-3xl font-semibold text-gray-900">Welcome, Admin!</h1>
          <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
            {/* Your dashboard content here */}
          </div>
        </main>
      </div>
    </div>
  );
}
