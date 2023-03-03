import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';

export function ContactListItem({ contacts, deleteItem}) {
    return (
        contacts.map(({ name, number, id }) => {
            return (
                <Item key={id}>{name}: {number}<Button onClick={() => { deleteItem(id) }} type='button'>Delete</Button></Item>
            );
        })
    );
};

ContactListItem.propTypes = {
    deleteItem: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};