import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock, ChevronRight, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { formatCurrency } from '@/utils/currency';

const Orders = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Mock orders data with INR prices
  const orders = [
    {
      id: 'NIV-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 290417,
      items: [
        { name: 'Eames Lounge Sofa', quantity: 1, price: 290417, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop' }
      ],
      shipping: {
        address: '123 Design Street, Mumbai, Maharashtra 400001',
        method: 'White Glove Delivery',
        tracking: 'WG123456789'
      },
      timeline: [
        { status: 'Order Placed', date: '2024-01-15', completed: true },
        { status: 'Processing', date: '2024-01-16', completed: true },
        { status: 'Shipped', date: '2024-01-18', completed: true },
        { status: 'Delivered', date: '2024-01-20', completed: true }
      ]
    },
    {
      id: 'NIV-2024-002',
      date: '2024-01-10',
      status: 'shipped',
      total: 207417,
      items: [
        { name: 'Platform Bed Frame', quantity: 1, price: 207417, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200&h=200&fit=crop' }
      ],
      shipping: {
        address: '123 Design Street, Mumbai, Maharashtra 400001',
        method: 'White Glove Delivery',
        tracking: 'WG987654321'
      },
      timeline: [
        { status: 'Order Placed', date: '2024-01-10', completed: true },
        { status: 'Processing', date: '2024-01-11', completed: true },
        { status: 'Shipped', date: '2024-01-14', completed: true },
        { status: 'Out for Delivery', date: 'Expected Jan 16', completed: false }
      ]
    },
    {
      id: 'NIV-2024-003',
      date: '2024-01-05',
      status: 'processing',
      total: 49717,
      items: [
        { name: 'Velvet Dining Chair', quantity: 2, price: 49717, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200&h=200&fit=crop' }
      ],
      shipping: {
        address: '456 Modern Ave, Bangalore, Karnataka 560001',
        method: 'Standard Delivery',
        tracking: null
      },
      timeline: [
        { status: 'Order Placed', date: '2024-01-05', completed: true },
        { status: 'Processing', date: '2024-01-06', completed: true },
        { status: 'Preparing for Shipment', date: 'Expected Jan 8', completed: false }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-subtle-gold" />;
      default:
        return <Package className="w-5 h-5 text-muted-walnut" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-700';
      case 'shipped':
        return 'bg-blue-100 text-blue-700';
      case 'processing':
        return 'bg-subtle-gold/20 text-subtle-gold';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal pt-24 pb-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Package className="w-24 h-24 text-warm-beige dark:text-muted-walnut mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
            No Orders Yet
          </h1>
          <p className="text-muted-walnut mb-8 max-w-md mx-auto">
            You haven't placed any orders yet. Start exploring our collection to find your perfect furniture pieces.
          </p>
          <Button onClick={() => navigate('/products')}>
            Start Shopping
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-2">
            Your Orders
          </h1>
          <p className="text-muted-walnut">
            Track and manage your purchases
          </p>
        </motion.div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-deep-charcoal rounded-2xl p-6 shadow-soft"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                  </div>
                  <div>
                    <p className="text-sm text-muted-walnut">Order #{order.id}</p>
                    <p className="font-semibold text-deep-charcoal dark:text-soft-ivory">
                      Placed on {new Date(order.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <p className="text-xl font-bold text-deep-charcoal dark:text-soft-ivory">
                    {formatCurrency(order.total)}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div className="border-t border-warm-beige dark:border-muted-walnut pt-6 mb-6">
                <div className="space-y-4">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover bg-warm-beige/50 dark:bg-muted-walnut/30"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-deep-charcoal dark:text-soft-ivory">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-walnut">Qty: {item.quantity}</p>
                        <p className="font-medium text-deep-charcoal dark:text-soft-ivory">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Timeline */}
              <div className="border-t border-warm-beige dark:border-muted-walnut pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {order.timeline.map((step, i) => (
                      <div key={i} className="flex items-center flex-shrink-0">
                        <div className={`w-3 h-3 rounded-full ${
                          step.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`} />
                        <div className="ml-2 mr-4">
                          <p className={`text-sm font-medium ${
                            step.completed ? 'text-deep-charcoal dark:text-soft-ivory' : 'text-muted-walnut'
                          }`}>
                            {step.status}
                          </p>
                          <p className="text-xs text-muted-walnut">{step.date}</p>
                        </div>
                        {i < order.timeline.length - 1 && (
                          <div className={`w-8 h-0.5 mx-2 ${
                            step.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6 pt-6 border-t border-warm-beige dark:border-muted-walnut">
                {order.status === 'delivered' && (
                  <Button variant="outline" size="sm">
                    Write a Review
                  </Button>
                )}
                {order.tracking && (
                  <Button variant="ghost" size="sm">
                    Track Order
                  </Button>
                )}
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;