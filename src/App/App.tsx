import "./App.scss";

const App: React.FC = () => {
  return (
    <main className="container">
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Innovid challenge</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div className="window-body">
          <p>Hello world</p>
        </div>
      </div>
    </main>
  );
};

export default App;
