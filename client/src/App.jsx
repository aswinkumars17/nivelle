import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { ToastProvider } from './components/ui/Toast';
import { AuthProvider } from './contexts/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <ToastProvider>
            <ScrollToTop />
            <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal transition-colors duration-300">
              <Navbar />
              <main className="min-h-[calc(100vh-300px)]">
                <AppRoutes />
              </main>
              <Footer />
            </div>
          </ToastProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;