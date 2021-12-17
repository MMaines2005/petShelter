import {Router} from '@reach/router';
import './App.css';
import DetailView from './views/DetailView';
import MainView from './views/mainView';
import NewView from './views/newView';
import UpdateView from './views/UpdateView';

function App() {
  return (
    <div className="App">
      <Router>
      <MainView path="/" />
      <NewView path="/pets/new" />
      <DetailView path="/pets/:id" />
      <UpdateView path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
