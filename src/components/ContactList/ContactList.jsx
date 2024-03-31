// ContactList.jsx

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { selectLoading } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";



const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <div className={css.wrapper}>
      <div className={css.loading}>{isLoading && "Request in progress..."}</div>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
