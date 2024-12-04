import React from "react";
import { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";

// pull setSelectedContactId to pass it down to ContactRow component to pass id to parent
export default function ContactList({ setSelectedContactId }) {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                const json = await response.json();
                setContacts(json);

            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts();
    }, []);

    return (
        <>
            {contacts ? (
                <table className="fullTable">
                    <thead>
                        <tr>
                        <th colSpan="3">Contact List</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="subheader">Name</td>
                        <td className="subheader">Email</td>
                        <td className="subheader">Phone</td>
                        </tr>
                        {
                        contacts.map((contact) => {
                            return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
                        })
                        }
                    </tbody>
                </table>
            ) : ("")};
        </>
    );
};