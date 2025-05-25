import './formStyle.css';

function Form() {
  return (
    <form className="gymForm">
      <h1 className="gymFormTitle">Formularz zgłoszeniowy</h1>
      <input type="text" placeholder="Imię" className="gymInput" required />
      <input type="text" placeholder="Nazwisko" className="gymInput" required />
      <input type="email" placeholder="Email" className="gymInput" required />
      <input type="tel" placeholder="Telefon" className="gymInput" required />
      <textarea placeholder="Uwagi" className="gymTextarea"></textarea>
      <button type="submit" className="gymButton">Wyślij</button>
    </form>
  );
}

export default Form;