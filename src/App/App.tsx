import "../main.scss";
import Footer from "./components/Footer/Footer";
import Server from "./components/Server/Server";

const App: React.FC = () => {
  return (
    <>
      <main>
        <Server windowTitle="Server #1" />
        <Server windowTitle="Server #2" />
        <Server windowTitle="Server #3" />
        <Server windowTitle="Server #4" />
      </main>
      <Footer />
    </>
  );
};

export default App;
