export default function Widget({ title, type }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">{title}</h2>
        {/* Conditional rendering based on widget type */}
        {type === 'realTimeUsers' && (
          <div>
            {/* Real-time Users Widget Content */}
          </div>
        )}
        {type === 'salesData' && (
          <div>
            {/* Sales Data Widget Content */}
          </div>
        )}
        {type === 'performanceMetrics' && (
          <div>
            {/* Performance Metrics Widget Content */}
          </div>
        )}
      </div>
    );
  }
  