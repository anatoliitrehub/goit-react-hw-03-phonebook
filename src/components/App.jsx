import { Component } from 'react';
import sid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addUser = ({ name, number }) => {
    // console.log(name, number);
    if (this.state.contacts.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          id: sid.generate(),
          name: name,
          number: number,
        },
      ],
    }));
  };

  filterUser = searchWord => {
    this.setState({ filter: searchWord });
  };

  removeUser = id => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id) });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />

        <h2>Contacts</h2>
        <Filter filterUser={this.filterUser} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          removeUser={this.removeUser}
        />
      </div>
    );
  }
}
