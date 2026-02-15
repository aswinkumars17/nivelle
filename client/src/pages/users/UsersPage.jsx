import { User, Package, Heart, Clock } from 'lucide-react';

const UsersPage = () => {
  const upcomingFeatures = [
    { icon: User, label: 'Profile Management', description: 'Update your personal information and preferences' },
    { icon: Package, label: 'Order History', description: 'View and track all your past orders' },
    { icon: Heart, label: 'Wishlist', description: 'Save your favorite products for later' },
    { icon: Clock, label: 'Order Tracking', description: 'Real-time tracking of your deliveries' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <User className="w-10 h-10 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-soft-ivory mb-4">
          User Area
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Coming Soon
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-soft-ivory mb-6">
          What's Coming
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-soft-ivory mb-1">
                  {feature.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500 dark:text-gray-400">
          Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default UsersPage;
