import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-10">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          {/* Your dashboard content here */}
        </div>
      </div>
    </div>
  );
}
