import AppProviders from "./context";
import PlanetsListView from "./pages/PlanetsListView";

function App() {
  return (
    <AppProviders>
      <PlanetsListView />
    </AppProviders>
  );
}

export default App;
