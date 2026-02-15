import { Package, FolderTree, Users, ShoppingCart } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white rounded-xl shadow-soft p-6">
    <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Package} 
          label="Total Products" 
          value="120" 
          color="bg-blue-500" 
        />
        <StatCard 
          icon={FolderTree} 
          label="Categories" 
          value="9" 
          color="bg-green-500" 
        />
        <StatCard 
          icon={Users} 
          label="Total Users" 
          value="156" 
          color="bg-purple-500" 
        />
        <StatCard 
          icon={ShoppingCart} 
          label="Total Orders" 
          value="89" 
          color="bg-orange-500" 
        />
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-soft p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <p className="font-medium text-gray-900">New order placed</p>
                <p className="text-sm text-gray-500">Order #ORD-00{i}</p>
              </div>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
