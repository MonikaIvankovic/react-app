import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import "./styles/styles.scss";
import Checkbox from "./components/checkbox";
import Formfield from "./components/formfield";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
import Modal from "./components/modal";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Button />
      <Checkbox />
      <Formfield />
      <Tags />
      <Pagination />
      <Modal />
    </div>
  );
};

export default App;
