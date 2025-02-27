
const Stats = () => {
  const stats = [
    { value: "500+", label: "Gyms Using Our Platform" },
    { value: "50k+", label: "Active Members" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "35%", label: "Average Revenue Growth" }
  ];

  return (
    <div className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2 text-primary dark:text-white">
                {stat.value}
              </div>
              <div className="text-secondary dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
