import './App.css';
import profileImage from "./chetna.JPG"; 

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author : Chetna Modhvadiya</h2>
      <img src={profileImage} alt="profile-image"  className="img"/>
    </div>
  );
}

export default App;
