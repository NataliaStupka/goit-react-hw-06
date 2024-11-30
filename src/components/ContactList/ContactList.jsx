import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/contactSlice"; //useSelector

const ContactList = () => {
  const contacts = useSelector(selectContacts); //from contactSlice, selectContacts = (state) => state.contact.items

  //для рендера не просто contacts, а і відфільтрованого
  const filter = useSelector(selectNameFilter);
  const filterContact = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filterContact.map((contact) => (
        <li key={contact.id} className={s.item}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
