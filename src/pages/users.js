import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Users() {
  const fakeUsers = [
    { username: 'JohnDoe', email: 'john.doe@example.com' },
    { username: 'JaneDoe', email: 'jane.doe@example.com' },
    { username: 'EmilySmith', email: 'emily.smith@example.com' },
    { username: 'MichaelBrown', email: 'michael.brown@example.com' },
    { username: 'SarahWilliams', email: 'sarah.williams@example.com' },
    { username: 'DavidJohnson', email: 'david.johnson@example.com' },
    { username: 'LindaJones', email: 'linda.jones@example.com' },
    { username: 'RobertDavis', email: 'robert.davis@example.com' },
    { username: 'PatriciaGarcia', email: 'patricia.garcia@example.com' },
    { username: 'JamesMartinez', email: 'james.martinez@example.com' },
    { username: 'JenniferRodriguez', email: 'jennifer.rodriguez@example.com' },
    { username: 'WilliamPerez', email: 'william.perez@example.com' },
    { username: 'ElizabethTaylor', email: 'elizabeth.taylor@example.com' },
    { username: 'RichardAnderson', email: 'richard.anderson@example.com' },
    { username: 'BarbaraThomas', email: 'barbara.thomas@example.com' },
    { username: 'CharlesHernandez', email: 'charles.hernandez@example.com' },
    { username: 'JosephMoore', email: 'joseph.moore@example.com' },
    { username: 'MargaretJackson', email: 'margaret.jackson@example.com' },
    { username: 'ThomasHarris', email: 'thomas.harris@example.com' },
    { username: 'SusanClark', email: 'susan.clark@example.com' },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6 ml-64">
          <h1 className="text-3xl font-semibold text-blue-800 mb-4">Users</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">User List</h2>
            <table className="min-w-full bg-white">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="w-1/3 text-left py-3 px-4">Username</th>
                  <th className="w-1/3 text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {fakeUsers.map((user, index) => (
                  <tr key={index}>
                    <td className="text-left py-3 px-4">{user.username}</td>
                    <td className="text-left py-3 px-4">{user.email}</td>
                    <td className="text-left py-3 px-4">
                      <button className="text-blue-500 hover:text-blue-700">Edit</button>
                      <button className="text-red-500 hover:text-red-700 ml-4">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
