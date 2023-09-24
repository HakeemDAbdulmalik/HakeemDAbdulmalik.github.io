import './App.css';
import About from './pageBlocks/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hakeem Abdulmalik</p>
        <p>Freelance Software Engineer</p>

        <p>I build interesting projects. I specialize in automation, optimization, and data analysis</p>
        <ul>
          <li>Github icon</li>
          <li>LinkedIn icon</li>
        </ul>
      </header>

      <About></About>
    </div>
  );
}


              /* background:radial-gradient(
              600px circle at 0px 0px,
              rgba(29, 78, 216, 0.15),
              transparent 80%
            ); */
            // Background color
            // #0e172a

export default App;
