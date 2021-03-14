import appStyles from "./App.module.scss";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <div className={appStyles.body}>
      <MainPage />
    </div>
  );
}

export default App;
