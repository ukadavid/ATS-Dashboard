import "./App.css";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import SearchFilterSection from "./pages/SearchFilterSection";

function App() {
  return (
    <div className="program-application">
      <SideNav />
      <SearchFilterSection />
      <Header />
    </div>
  );
}

export default App;
