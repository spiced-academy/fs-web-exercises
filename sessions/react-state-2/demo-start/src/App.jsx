import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./App.css";

export default function App() {
  return (
    <main>
      <h1>Search</h1>
      <SearchForm />
      <SearchResults />
    </main>
  );
}
