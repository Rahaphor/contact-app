import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props) => {
    
    const deleteContactHandler = (id) => {
        props.getContactid(id);
    }
    const renderConatactList = props.contacts.map((contact) =>{
        return(
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        );

    })
    
    return (
        <div className="ui celled list">{renderConatactList}</div>
    )
}
export default ContactList;