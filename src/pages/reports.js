import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Chart from 'chart.js/auto';

export default function Reports() {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    let lineChartInstance, barChartInstance, pieChartInstance;

    // Destroy previous instances if they exist
    if (lineChartInstance) lineChartInstance.destroy();
    if (barChartInstance) barChartInstance.destroy();
    if (pieChartInstance) pieChartInstance.destroy();

    // Line Chart
    lineChartInstance = new Chart(lineChartRef.current, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [12, 19, 3, 5, 2],
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      },
    });

    // Bar Chart
    barChartInstance = new Chart(barChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
          },
        ],
      },
    });

    // Pie Chart
    pieChartInstance = new Chart(pieChartRef.current, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [12, 19, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
          },
        ],
      },
    });

    // Cleanup function to destroy instances when component unmounts
    return () => {
      if (lineChartInstance) lineChartInstance.destroy();
      if (barChartInstance) barChartInstance.destroy();
      if (pieChartInstance) pieChartInstance.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6 ml-64">
          <h1 className="text-3xl font-semibold text-blue-800 mb-4">Reports</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Line Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">Line Chart</h2>
              <canvas ref={lineChartRef}></canvas>
            </div>
            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">Bar Chart</h2>
              <canvas ref={barChartRef}></canvas>
            </div>
            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">Pie Chart</h2>
              <canvas ref={pieChartRef}></canvas>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
