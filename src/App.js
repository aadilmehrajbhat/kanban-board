import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 min-w-0 bg-white">
        <Header />
        <div></div>
      </div>
    </div>
  );
}

export default App;
