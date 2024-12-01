import { useParams } from "react-router-dom";
import { ContactsScreenProps } from "../../infrastructure/interfaces";
import { ContactCard } from "../components/ContactCard";

export const ContactProfilePage = (contact: ContactsScreenProps) => {
  const { id } = useParams();
  const { contacts } = contact;

  const data = contacts.find((c) => c.id === Number(id));

  if (!data) {
    return <h2>Contact not found</h2>;
  }

  return (
    <ContactCard
      key={data.id}
      id={data.id}
      avatar_url={data.avatar_url}
      full_name={data.first_name}
      company={data.company}
      details={data.details}
      email={data.email}
      phone_number={data.phone.number}
      addresses={data.addresses}
    ></ContactCard>
  );
};
