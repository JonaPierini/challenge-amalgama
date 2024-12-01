export interface Contact {
  id: number;
  avatar_url: string;
  first_name: string;
  last_name: string;
  company: string;
  details: string;
  email: string;
  phone: {
    area_code: string;
    number: string;
  };
  addresses: Address[];
}

interface Location {
  id: number;
  name: string;
}

export interface Address {
  line_1: string;
  line_2?: string;
  zip_code: string;
  city_id?: number;
  state_id?: number;
  city: string;
  state: string;
}

export interface ContactsScreenProps {
  contacts: Contact[];
  cities?: Location[];
  states?: Location[];
}
