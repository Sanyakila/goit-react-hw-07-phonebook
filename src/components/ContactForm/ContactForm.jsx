import { useState } from "react";
import shortid from "shortid";
import css from './ContactForm.module.css';
import { addContact } from "redux/operations";
import { getContactsValue } from "redux/selectors/selectors";
import { useSelector, useDispatch } from "react-redux";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContactsValue);

    const dispatch = useDispatch();
    const id = shortid.generate();

    const createContact = ({ name, number }) => ({
        id: id,
        name,
        number,
    });

    const addContactsToState = contact => dispatch(addContact(contact));

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        
        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const userName = contacts.find(user => user.name.toLocaleLowerCase() === name.toLowerCase());
        if (userName) {
            alert(`${name} is already in contacts!`);
        } else {
            addContactsToState(createContact({ name, number }));
            reset();
        }
    };

    const reset = () => {
        setName('');
        setNumber('')
    };

        return (
            <form
                onSubmit={handleSubmit}
                className={css.form}
            >
                <label
                    className={css.label}>
                    Name
                </label>
                
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleInputChange}
                    className={css.inputForm}
                />

                <label
                    className={css.label}>
                    Number
                </label>

                <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleInputChange}
                    className={css.inputForm}
                />

                <button
                    type="submit"
                    className={css.btnForm}>Add contact
                </button>
            </form>
    );
};
