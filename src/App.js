import appStyles from "./App.module.scss";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <div className={appStyles.body}>
      <div className={appStyles.bg}>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
