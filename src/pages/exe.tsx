import Button from "../components/button";
import Card from "../components/card";
import Checkbox from "../components/checkbox";
import FlexExe from "../components/flex-exe";
import Formfield from "../components/formfield";
import Input from "../components/input";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import Pagination from "../components/pagination";
import Tags from "../components/tags";
import TransformExe from "../components/transform-exe";

const Exe = () => {
  return (
    <>
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
    </>
  );
};

export default Exe;
