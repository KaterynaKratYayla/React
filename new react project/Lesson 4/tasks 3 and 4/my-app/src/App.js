import './App.css';
import ConForm from './tasks/task3'
import {Posts,Comments,Albums} from './tasks/task4';

function App() {
  return (
    <div className="App">
       <ConForm />
       <div className = 'useEffectDemo'>
            <Posts />
            <Comments />
            <Albums />
       </div>
    </div>
  );
}

export default App;
