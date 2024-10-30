import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const initialValues = { name: "", phone: "" };
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newContact = { id: nanoid(), name: values.name, phone: values.phone };
    values.phone && values.name
      ? dispatch(addContact(newContact)) && options.resetForm()
      : toast("Please enter name and valid phone number", {
          duration: 2000,
          position: "top-right",
        });
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="name"
            placeholder="Enter contact name"
          />
          <Field
            className={s.input}
            type="tel"
            name="phone"
            placeholder="Enter contact phone number"
          />
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
};

export default ContactForm;
