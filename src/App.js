import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/Main";
import "./App.css";

// Create a client
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 0,
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <MainPage />
        </div>
      </Router>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
