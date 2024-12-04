import React from "react";
import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    // declare state variable to store information of selected contact
    const [contact, setContact] = useState(null);

    // fetch contact information and store it in state
    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const json = await response.json();
                setContact(json);
    
            } catch (error) {
                console.error(error);
            }
        }
        if (selectedContactId) {
            fetchContact();
        }
    }, [selectedContactId]);

    // if contact is NOT null, render selectedTable, otherwise, render an empty string
    return (
        <>
            {contact ? (
                <>
                    <table className="selectedTable">
                        <thead>
                            <tr>
                                <th>{contact.name}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>ID: {contact.id}</td></tr>
                            <tr><td>Username: {contact.username}</td></tr>
                            <tr><td>Email: {contact.email}</td></tr>
                            <tr><td>Address: {contact.address.street} {contact.address.suite} {contact.address.city}, {contact.address.zipcode}</td></tr>
                            <tr><td>Phone: {contact.phone}</td></tr>
                            <tr><td>Website: {contact.website}</td></tr>
                            <tr><td>Company: {contact.company.name} - "{contact.company.catchPhrase}"</td></tr>
                        </tbody>
                    </table>
                    <button id="returnBtn" onClick={() => {setSelectedContactId(null)}}>Return</button>
                </>) : (
                ""
            )}
        </>
    );
};