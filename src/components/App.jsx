import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  getStateValues = (data) => {
      this.setState(({ contacts }) => {
        return {
          contacts: [data, ...contacts]
        };
      });
  };
 
  deleteItem = id => {
   return this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }));
  };

  getFilter = (text) => {
    this.setState({ filter: text });
  };
  
  render() {
    const { getStateValues, getFilter, deleteItem, state: { contacts, filter } } = this;
    const filteredContacts = contacts.filter(({ name }) => { return name.toLowerCase().includes(filter.toLowerCase()) });
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            contacts={contacts}
            getStateValues={getStateValues} />
          <h2>Contacts</h2>
          <Filter
            getFilter={getFilter}
            filteredContacts={filteredContacts}
          />
          <ContactList
            filteredContacts={filteredContacts}
            contacts={contacts}
            deleteItem={deleteItem} />
        </div>
      </div>
    );
  };
};
