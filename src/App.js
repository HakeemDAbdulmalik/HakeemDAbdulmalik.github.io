import About from './pageBlocks/About';
import Experience from './pageBlocks/Experience';
import Projects from './pageBlocks/Projects';
import Education from './pageBlocks/Education';

function App() {
  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="__variable_20b187 group/spotlight relative">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" styleName="background: radial-gradient(600px at 1018px 308px, rgba(29, 78, 216, 0.15), transparent 80%)"></div>
        <header className="">
          <p>Hakeem Abdulmalik</p>
          <p>Freelance Software Engineer</p>

          <p>I build interesting projects. I specialize in automation, optimization, and data analysis</p>
          <ul>
            <li>Github icon</li>
            <li>LinkedIn icon</li>
          </ul>
        </header>

        <About></About>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
      </div>
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
