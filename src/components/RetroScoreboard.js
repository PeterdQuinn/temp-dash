export default function RetroScoreboard({ userSignUps, sales, otherKPI }) {
    return (
      <div className="bg-blue-800 text-white rounded-lg p-4 shadow-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Retro Scoreboard</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-orange-500 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">User Sign-Ups</h3>
            <p className="text-4xl font-mono">{userSignUps}</p>
          </div>
          <div className="bg-orange-500 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Sales</h3>
            <p className="text-4xl font-mono">{sales}</p>
          </div>
          <div className="bg-orange-500 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Other KPI</h3>
            <p className="text-4xl font-mono">{otherKPI}</p>
          </div>
        </div>
      </div>
    );
  }
  