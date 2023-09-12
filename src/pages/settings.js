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
            {/* User Profile Settings */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">User Profile</h2>
              {/* Form fields for updating user profile */}
            </div>
            {/* Security Settings */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">Security</h2>
              {/* Options for password change, 2FA */}
            </div>
            {/* Notification Preferences */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">Notifications</h2>
              {/* Options for email notifications, in-app notifications */}
            </div>
            {/* API Key Management */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">API Keys</h2>
              {/* Options for generating and revoking API keys */}
            </div>
            {/* Import/Export Settings */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">Import/Export</h2>
              {/* Options for importing and exporting settings */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
