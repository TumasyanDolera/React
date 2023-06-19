
import './App.css';
import UserProfileCard from './components/Title'

function App(props) {
  return (
    <div className="App">
     <UserProfileCard Name="Ann"
                      Email="Ann@mail.ru"
                      Avatar="https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg"
     />
    </div>
  );
}

export default App;
