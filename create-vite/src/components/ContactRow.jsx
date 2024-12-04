import React from "react";

export default function ContactRow({ setSelectedContactId, contact }) {
    // add onclick to row to send contact id to parent element
    return (
        <>
            <tr className="fullListRow" onClick={() => { setSelectedContactId(contact.id); }}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
            </tr>
        </>
    );
};