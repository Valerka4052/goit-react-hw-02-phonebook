import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { Component } from 'react';


export class ContactList extends Component {
    static propTypes = {
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
        const { contacts, filteredContacts, deleteItem } = this.props;
        return (
            <ul>
                {filteredContacts.length ?
                    <ContactListItem
                        contacts={filteredContacts}
                        deleteItem={deleteItem}
                    /> :
                    <ContactListItem
                        contacts={contacts}
                        deleteItem={deleteItem}
                    />}
            </ul>
        );
    };
};

