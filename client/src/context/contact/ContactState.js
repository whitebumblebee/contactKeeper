import React, { userReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "222-222-2222",
        type: "personal"
      },
      {
        id: 1,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-333-3333",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = userReducer(contactReducer, initialState);

  // Add contact

  // Delete Contact

  // Set current contact

  // Clear current contact

  // Update Contact

  // Filter Contacts

  // Clear Filters

  return (
    <ContactState.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactState.Provider>
  );
};

export default ContactState;
