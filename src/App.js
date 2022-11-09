
import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/topbar/Topbar';
import Header from './components/header/Header';

function App() {
  return (
    <div >
      <TopBar/>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;