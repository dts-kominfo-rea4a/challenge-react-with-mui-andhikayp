// import './App.css';
import React from 'react';

import data from './data/contacts.json'
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  const [contacts, setContacts] = React.useState(data)
  console.log(contacts, 'mana nih')
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const renderContact = (contact) => (
    <Contact data={contact} />
  )



  return (
    <div className="App">
      <Header />
      <ContactForm
        contacts={contacts}
        setContacts={setContacts}
      />
      {contacts.map(renderContact)}
    </div>
  );
};

export default App;