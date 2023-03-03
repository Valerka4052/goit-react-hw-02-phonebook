import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

export class ContactForm extends Component{

    static propTypes = {
        getStateValues: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(
            PropTypes.exact({
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    };

    state = {
        name: '',
        number: '',
        id: nanoid(),
    };
    
    getInputValues = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({ [key]: value });
    };

    getValues = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.number === '') {
            return
        } else if (this.props.contacts.find((contact) => {
            return contact.name === this.state.name
        })) {
            return alert(`${this.state.name} is already in contacts`);
        }else{
        this.props.getStateValues(this.state);
            this.reset();
        };
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
            id: nanoid(),
        });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form>
                <label />Name<input
                    onChange={this.getInputValues}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required /><label />
                <label>Number<input
                    onChange={this.getInputValues}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                /></label>
                <button type="submit" onClick={this.getValues}>add contact</button>
            </form>
        );
    };
};
