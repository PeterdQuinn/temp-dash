import Link from 'next/link';


export default function Navbar() {
  return (
    <div className="bg-blue-800 p-4 text-white">
      <span className="text-white mr-4 cursor-pointer">
        Home
      </span>
      <span className="text-white cursor-pointer">
        Dashboard
      </span>
    </div>
  );
}
