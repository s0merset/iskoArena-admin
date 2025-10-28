import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { Dashboard } from './components/Dashboard';
import { SchedulePage } from './components/SchedulePage';
import { ScoresPage } from './components/ScoresPage';
import { StandingsPage } from './components/StandingsPage';
import { AnalyticsPage } from './components/AnalyticsPage';
import { Layout } from './components/Layout';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  if (!isAuthenticated) {
    if (currentPage === 'signup') {
      return <SignupPage onSignup={handleSignup} onSwitchToLogin={() => setCurrentPage('login')} />;
    }
    return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setCurrentPage('signup')} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'schedule':
        return <SchedulePage />;
      case 'scores':
        return <ScoresPage />;
      case 'standings':
        return <StandingsPage />;
      case 'analytics':
        return <AnalyticsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout 
      currentPage={currentPage} 
      onNavigate={setCurrentPage}
      onLogout={handleLogout}
    >
      {renderPage()}
    </Layout>
  );
}
