import PropTypes from 'prop-types';

export function ContactListItem({ contacts, deleteItem}) {
    return (
        contacts.map(({ name, number, id }) => {
            return (
                <li key={id}>{name}:{number}<button onClick={() => { deleteItem(id) }} type='button'>Delete</button></li>
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