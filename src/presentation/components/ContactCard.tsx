import { Address } from "../../infrastructure/interfaces";
import { ContactAddress } from "./ContactAddress";

interface ContactCardProps {
  id: number;
  avatar_url: string;
  full_name: string;
  company: string;
  details: string;
  email: string;
  phone_number: string;
  addresses: Address[];
}

export const ContactCard = (contact: ContactCardProps) => {
  return (
    <div key={contact.id}>
      <div>
        <img src={contact.avatar_url} alt={`${contact.full_name}'s avatar`} />
        <h3>{contact.full_name}</h3> - <h4>{contact.company}</h4>
      </div>
      <p>{contact.details}</p>
      <ul>
        <li>email: {contact.email}</li>
        <li>phone: {contact.phone_number}</li>
        <li>
          {contact.addresses.length > 1 ? (
            <h4>Addresses:</h4>
          ) : (
            <h4>Address:</h4>
          )}
          {contact.addresses.map((address, index) => (
            <ContactAddress key={index} index={index} address={address} />
          ))}
        </li>
      </ul>
    </div>
  );
};
