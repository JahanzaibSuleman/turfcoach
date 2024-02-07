import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Dashboard } from './components';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Dashboard />
      </div>
    </QueryClientProvider>
  );
}

export default App;
