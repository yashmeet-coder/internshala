import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Details from './components/Details';

function App() {
  return (
    <div className="App bg-[#f3f3f3] min-h-screen pb-4">
      <Header />
      <Sidebar />
      {/* <Details id={1234}/> */}
    </div>
  );
}

export default App;
