import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/phonebook-selectors';
import { addContact } from '../../redux/phonebook-operations';
import s from './ContactForm.module.css';

function ContactForm() {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
   const onSubmit = (name, number) =>
    dispatch(addContact(name, number));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactCheck = () => {
    const namesIsIn = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const numbersIsIn = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (namesIsIn.includes(name) || numbersIsIn.includes(number)) {
      alert(`${name}${number} is already in contacts`);
    }

    if (name === '' || number === '') {
      alert('Enter all data, please');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setName('');
    setNumber('');
    if (contactCheck()) {
      return;
    }

    onSubmit(name, number);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name:
          <input
          type="text"
          name="name"
          value={name}
          placeholder="Jack Sparrow"
          onChange={event => setName(event.currentTarget.value)}
          className={s.input}
        />
      </label>

      <label className={s.label}>
        Number:
          <input
          type="tel"
          name="number"
          value={number}
          placeholder="111-11-11"
          onChange={event => setNumber(event.currentTarget.value)}
          className={s.input}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
        </button>
    </form>
  );
}

export default ContactForm;
