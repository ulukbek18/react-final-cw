import logo from './logo.svg';
import InitialPage from './components/InitialPage';
import {Routes, Route} from 'react-router-dom'
import { QuestionContainer } from './components/QuestionContainer';
import  CreateQuestion  from './components/CreateQuestion';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<InitialPage/>}/>
        <Route path="/questions" element={<QuestionContainer/>}/>
        <Route path="/createquestions" element={<CreateQuestion/>}/>
        </Routes>
    </div>
  );
}

export default App;
