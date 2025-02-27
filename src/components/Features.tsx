
import { BarChart3, Users, Calendar, DollarSign } from "lucide-react";


const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Track attendance, revenue, and member growth with powerful analytics dashboard"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Member Management",
      description: "Easily manage memberships, track progress, and engage with your community"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Class Scheduling",
      description: "Streamline class bookings and instructor management with our intuitive calendar"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Payment Processing",
      description: "Handle payments, subscriptions, and financial reporting all in one place"
    }
  ];

  return (
    <div className="py-24 bg-surface dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary dark:text-white">
          Everything You Need to Run Your Gym
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-highlight dark:bg-blue-600 flex items-center justify-center text-primary dark:text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">
                {feature.title}
              </h3>
              <p className="text-secondary dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
