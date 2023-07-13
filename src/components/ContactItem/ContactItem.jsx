import React from "react";
import s from './ContactItem.module.css';
import Proptypes from 'prop-types';


const ContactItem = ({id, name, number, onDeleteContact}) => {
    return (
        <li className={s.item}>
            <p style={{
                color: '#000'  
            }}>
                {name}.....
                {number}
            </p>
            <button
            className={s.btn}
            type="submit"
            onClick={() => onDeleteContact(id)}
            >
                Delete
            </button>
        </li>
    );
};

// --------------------
export default ContactItem;
// --------------------

ContactItem.propTypes = {
    id: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    number: Proptypes.string.isRequired,
    onDeleteContact: Proptypes.func.isRequired
}
