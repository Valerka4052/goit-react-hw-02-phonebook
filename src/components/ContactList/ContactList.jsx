import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { List } from './ContactList.styled';


export class ContactList extends Component {
    static propTypes = {
        filter: PropTypes.string.isRequired,
        deleteItem: PropTypes.func.isRequired,
        filteredContacts: PropTypes.arrayOf(
            PropTypes.exact({
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
        contacts: PropTypes.arrayOf(
            PropTypes.exact({
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    };

    render() {
        const { contacts, filteredContacts, deleteItem, filter } = this.props;
         console.log(filteredContacts)
        return (
            <List>
                {filter === '' ?
                    contacts.map(({ name, number, id }) => {
                        return <ContactListItem key={id}
                            name={name}
                            number={number}
                            id={id}
                            deleteItem={deleteItem}
                        />
                    })
                    :
                    filteredContacts.map(({ name, number, id }) => {
                        return <ContactListItem key={id}
                            name={name}
                            number={number}
                            id={id}
                            deleteItem={deleteItem}
                        />
                    })
                }
            </List>
        );
    };
};

