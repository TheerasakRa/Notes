import './App.css';
import Notes from './notepad/Notes';

function App() {
  return (
    <div className="App">
      <div class="grid w-screen h-screen bg-[url('https://images3.alphacoders.com/536/53625.jpg')] bg-cover bg-center ">
        <div class="w-full h-full grid-cols-3 backdrop-blur-lg">
          <Notes />
        </div>
      </div>
    </div>
  );
}

export default App;
