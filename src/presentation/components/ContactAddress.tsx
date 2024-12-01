import { Address } from "../../infrastructure/interfaces";

interface ContactAddrressProps {
  index: number;
  address: Address;
}

export const ContactAddress = ({ index, address }: ContactAddrressProps) => {
  return (
    <ul key={index}>
      <li>{address.line_1}</li>
      <li>{address.line_2}</li>
      <li>{address.zip_code}</li>
      <li>{address.city}</li>
      <li>{address.state}</li>
    </ul>
  );
};
