import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PageTitle from "../components/PageTitle/PageTitle";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      <PageTitle>Your contacts</PageTitle>
      <ContactList />
    </>
  );
}
