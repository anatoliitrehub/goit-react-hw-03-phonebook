import { Component } from 'react';
import st from './Contactform.module.css';

export default class ContactForm extends Component {
    initState = {
        name: '',
        number: '',
      };
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddUser = e => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState(this.initState);
  };

  render() {
    return (
      <form action="#" onSubmit={this.handleAddUser} className={st.form}>
        <label htmlFor="" className={st.labelName}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className={st.name}
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label htmlFor="" className={st.labelNumber}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            className={st.number}
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className={st.addContact}>Add contact</button>
      </form>
    );
  }
}
