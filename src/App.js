import { getVisibleContacts } from './redux/phonebook-selectors';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const totalContactsCount = contacts.length;

  return (
    <div className="container">
      <h1>PHONEBOOK</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p>Total number: {totalContactsCount}</p>
      <Filter />
      <ContactList />
    </div>
  );
}
