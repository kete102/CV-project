import "./App.css";
import Aside from "./components/aside";
import Options from "./components/head-options";
import { useToggle } from "./hooks/useToggle";

function App() {
  const { isToggled, toggle } = useToggle();
  return (
    <main className="h-screen mx-auto flex max-w-screen">
      <div className="w-[80%] flex flex-row justify-center p-9 bg-slate-100 h-screen">
        <Aside toggleContent={toggle} />
        <Options openContent={isToggled} />
      </div>
      <div className="w-full max-h-screen">
        <div className="mx-14 mt-16 p-6 shadow-lg shadow-slate-400 h-[90%]">
          cv resume doc
        </div>
      </div>
    </main>
  );
}

export default App;
