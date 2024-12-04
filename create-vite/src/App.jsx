import { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';
import './App.css';

function App() {
  // state variable to store id of selected contact
  const [selectedContactId, setSelectedContactId] = useState(null);

  // if selectedContactId is NOT null, render Contact List, otherwise, render Selected Contact
  // pass selectedContactId and setSelectedContactId to the SelectedContact component
  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

export default App
