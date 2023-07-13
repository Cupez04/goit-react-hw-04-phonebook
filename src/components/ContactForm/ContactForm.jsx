import { useState } from "react";
import { nanoid } from "nanoid";
import s from './ContactForm.module.css';

const ContactForm = ({onSubmit}) =>  {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
   const handleChange =  event => {
      const {name, value} = event.target;
      switch(name) {
        case "name" :
          setName(value);
          break;
          case "number":
            setNumber(value);
            break;
            default:
              return;
      }
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      if(onSubmit({id: nanoid(), name, number})){
        reset();
      }
    };
  
   const reset = () => {
      setName("");
      setNumber("");
    };
  
      return (
        <form className={s.form} onSubmit={handleSubmit}>
          <label>
            Name
            <input
              className={s.inputName}
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              className={s.inputNumber}
              value={number}
              onChange={handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
  
          <button type="submit" className={s.buttonEditor}>
            Add contact
          </button>
        </form>
      );
    }
  export default ContactForm;
  