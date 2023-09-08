import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-blue-500 p-4 text-white">
      <Link href="/">
        <span className="mr-4 cursor-pointer">Home</span>
      </Link>
      <Link href="/dashboard">
        <span className="cursor-pointer">Dashboard</span>
      </Link>
    </div>
  );
}
