import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import "./styles/styles.scss";
import Checkbox from "./components/checkbox";
import Formfield from "./components/formfield";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
import Modal from "./components/modal";
import TransformExe from "./components/transform-exe";
import FlexExe from "./components/flex-exe";
import Input from "./components/input";
import Card from "./components/card";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Button value="Animate me" animate={true} icon />
      <Button animate={false} />
      <Checkbox />
      <Formfield />
      <Tags />
      <Input label="Last name" rounded={true} />
      <Input validation="Age" />
      <Pagination />
      <Modal />
      <h2>Transform property exercise</h2>
      <TransformExe />
      <FlexExe />
      <div className="card__wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
