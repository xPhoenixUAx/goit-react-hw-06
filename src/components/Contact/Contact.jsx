/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p className={s.text}>Name: {name}</p>
      <p className={s.text}>Phone: {phone}</p>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete contact
      </button>
    </>
  );
};

export default Contact;
