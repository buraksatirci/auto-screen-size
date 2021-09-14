import './App.css';
import { GetScaledValue } from './autoScreenSize';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://thumbs.dreamstime.com/b/demo-computer-key-to-download-version-software-trial-64543995.jpg"} style={{height:GetScaledValue(200)}}/>
        <p style={{fontSize:GetScaledValue(30)}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{fontSize:GetScaledValue(40)}}>
          This autoScreenSize file set dimensions of any objects(Text, image etc.) 
        </p>
      </header>
    </div>
  );
}

export default App;
