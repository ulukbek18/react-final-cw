import logo from './logo.svg';
import InitialPage from './components/InitialPage';
import {Routes, Route} from 'react-router-dom'
import { QuestionList } from './components/QuestionList';

function App() {
  return (
    <div className="App">


        
        <Routes>

        <Route path="/" element={<InitialPage/>}/>
        <Route path="/questions" element={<QuestionList/>}/>
        </Routes>
    </div>
  );
}

export default App;
