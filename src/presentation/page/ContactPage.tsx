import { Link } from "react-router-dom";
import { ContactsScreenProps } from "../../infrastructure/interfaces";

export const ContactPage = ({
  contacts,
  cities,
  states,
}: ContactsScreenProps) => {
  const contactsToDisplay = contacts.map((contact) => ({
    id: contact.id,
    avatar_url: contact.avatar_url,
    full_name: `${contact.first_name} ${contact.last_name}`,
    company: contact.company,
    details: "",
    email: contact.email,
    phone_number: `(${contact.phone.area_code}) ${contact.phone.number}`,
    addresses: contact.addresses.map((address) => ({
      line_1: address.line_1,
      line_2: address.line_2,
      zip_code: address.zip_code,
      city: cities,
      state: states,
    })),
  }));

  return (
    <div>
      <h1>Contacts 👥</h1>
      {contactsToDisplay.map((contact) => (
        <div key={contact.id}>
          <h3>{contact.full_name}</h3>
          <Link to={`/contacts/${contact.id}`}>View Profile</Link>
        </div>
      ))}
    </div>
  );
};
