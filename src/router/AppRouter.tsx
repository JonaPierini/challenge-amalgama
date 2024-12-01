import { Navigate, Route, Routes } from "react-router-dom";
import { ContactPage } from "../presentation/page/ContactPage";
import { HomePage } from "../presentation/page/HomePage";
import { ContactProfilePage } from "../presentation/page/ContactProfilePage";
import { NavBar } from "../presentation/components/NavBar";

export const AppRouter = () => {
  const contacts = [
    // Ejemplo de contacto
    {
      id: 1,
      avatar_url: "https://example.com/avatar1.jpg",
      first_name: "John",
      last_name: "Doe",
      company: "Tech Inc.",
      details: "Lorem ipsum dolor sit amet.",
      email: "john.doe@example.com",
      phone: { area_code: "123", number: "4567890" },
      addresses: [
        {
          line_1: "123 Main St",
          line_2: "Apt 4B",
          zip_code: "10001",
          city_id: 1,
          state_id: 1,
          city: "string",
          state: "string",
        },
      ],
    },
    {
      id: 2,
      avatar_url: "https://example.com/avatar1.jpg",
      first_name: "Juan",
      last_name: "Pierini",
      company: "Tech Inc.",
      details: "Lorem ipsum dolor sit amet.",
      email: "juan.pierini@example.com",
      phone: { area_code: "123", number: "4567890" },
      addresses: [
        {
          line_1: "123 Main St",
          line_2: "Apt 4B",
          zip_code: "10001",
          city_id: 1,
          state_id: 1,
          city: "string",
          state: "string",
        },
      ],
    },
  ];

  const cities = [
    { id: 1, name: "New York" },
    { id: 2, name: "Los Angeles" },
  ];

  const states = [
    { id: 1, name: "NY" },
    { id: 2, name: "CA" },
  ];
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/home" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <ContactPage contacts={contacts} cities={cities} states={states} />
          }
        />
        <Route
          path="/contacts/:id"
          element={<ContactProfilePage contacts={contacts} />}
        />
        <Route path="/*" element={<Navigate to={"/home"} />} />
      </Routes>
    </>
  );
};
