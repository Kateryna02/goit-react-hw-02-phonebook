import React from 'react';
import ContactItem from 'components/ContactsItem/ContactsItem';
import s from './contactsList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.contactList}>
        {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
        ))}
    </ul>
);

export default ContactList;