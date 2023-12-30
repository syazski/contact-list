import { useState } from 'react';
import './App.css';
import ContactList from './components/contactlist.jsx';
import SelectedContact from "./components/selectedcontact.jsx";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {
      selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />
    )} 
    </>
  );
}

export default App
