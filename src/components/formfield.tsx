const Formfield = () => {
  return (
    <div className="formfield">
      <form>
        <div className="formfield__item">
          <label>Name:</label>
        </div>
        <div className="formfield__item">
          <input className="formfield__input" type="text" name="name" />
        </div>

        <div className="formfield__item">
          <button className="formfield__btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Formfield;
