import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="bg-blue-700 text-white w-64 h-screen fixed top-0 left-0 p-6">
      <ul className="space-y-4">
        <li className="text-orange-500 hover:text-orange-400">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="hover:text-orange-400">
          <Link href="/users">Users</Link>
        </li>
        <li className="hover:text-orange-400">
          <Link href="/settings">Settings</Link>
        </li>
        <li className="hover:text-orange-400">
          <Link href="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
}
