export default function Sidebar() {
  return (
    <div className="bg-indigo-800 text-white w-64 h-screen fixed top-0 left-0 p-6">
      <ul className="space-y-4">
        <li className="text-indigo-300">Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
        <li>Reports</li>
      </ul>
    </div>
  );
}
