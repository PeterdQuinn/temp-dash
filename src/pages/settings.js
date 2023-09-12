import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Settings() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6 ml-64">
          <h1 className="text-3xl font-semibold text-blue-800 mb-4">Settings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Settings */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">Account Settings</h2>
              {/* Form fields for account settings */}
            </div>
            {/* Security */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">Security</h2>
              {/* Form fields for security settings */}
            </div>
            {/* Notifications */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">Notifications</h2>
              {/* Form fields for notification settings */}
            </div>
            {/* Billing */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">Billing</h2>
              {/* Form fields for billing settings */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
