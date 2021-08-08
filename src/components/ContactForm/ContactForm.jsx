import React, { Component } from 'react';
import s from './ContactForm.module.css';
import { connect } from 'react-redux';
import { contactOperations } from '../../redux/contact';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChenge = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  hendleSubmit = event => {
    event.preventDefault();

    this.props.addContacts(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.ContactForm} onSubmit={this.hendleSubmit}>
        <label className={s.label}>Name</label>
        <input
          className={s.input}
          value={name}
          onChange={this.handleChenge}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label className={s.labelNamber}>Number</label>
        <input
          className={s.input}
          value={number}
          onChange={this.handleChenge}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addContacts: contactForm =>
    dispatch(contactOperations.addContacts(contactForm)),
});
export default connect(null, mapDispatchToProps)(ContactForm);
