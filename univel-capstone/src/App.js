import appStyle from './App.module.css';
import "./global.css"
import Index from './components/information/index';
import Navigate from './components/navigation/navigate';

function App() {
  return (
    <div className={appStyle.app}>
      <div className={appStyle.info}>
        <Index />
      </div>
      <div className={appStyle.navigate}>
        <Navigate />
      </div>
    </div>
  );
}

export default App;
