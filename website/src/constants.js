// Global constants used throughout the site
import React from 'react'

// Digital Law Lab administrator.  
// Name, and contact URL
const dll_admin_name = 'Mark Ferraretto';
const dll_admin_url = 'https://github.com/mferrare';
export const dll_admin_github = '@mferrare';

// Default text for ContactAdmin component
const defaultContactAdminText = "If you have any queries please contact";

// Use this component to display the contact admin text
export function ContactAdmin(props) {
    let contactText = "";
    if (!props.text) {
        contactText = defaultContactAdminText;
    } else {
        contactText = props.text;
    }
    return <p>{contactText} <a href={dll_admin_url}>{dll_admin_name}</a></p>;
}