import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import RetroScoreboard from '../components/RetroScoreboard';

export default function Home() {
  // Dummy data for the scoreboard
  const userSignUps = 120;
  const sales = 300;
  const otherKPI = 45;

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6 ml-64">
          <h1 className="text-3xl font-semibold text-blue-800 mb-4">Welcome, Admin!</h1>
          <RetroScoreboard userSignUps={userSignUps} sales={sales} otherKPI={otherKPI} />
          <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-700">Overview</h2>
            {/* Your dashboard content here */}
          </div>
        </main>
      </div>
    </div>
  );
}
