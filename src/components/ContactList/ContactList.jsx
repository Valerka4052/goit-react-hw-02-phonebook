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
        return (
            <List>
                {filter !== '' ?
                    <ContactListItem
                        contacts={filteredContacts}
                        deleteItem={deleteItem}
                    /> :
                    <ContactListItem
                        contacts={contacts}
                        deleteItem={deleteItem}
                    />}
            </List>
        );
    };
};

