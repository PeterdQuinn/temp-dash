export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0">
      <a href="#" className="text-white px-2 py-1 block">
        Home
      </a>
      <a href="#" className="text-white px-2 py-1 block">
        Profile
      </a>
      <a href="#" className="text-white px-2 py-1 block">
        Settings
      </a>
      {/* Add more links here */}
    </div>
  );
}
