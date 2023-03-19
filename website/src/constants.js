// Global constants used throughout the site
import React from 'react';

// Digital Law Lab administrator.  
// Name, and contact URL
export const dll_admin_name = 'Mark Ferraretto';
export const dll_admin_url = 'https://github.com/mferrare';
export const dll_admin_github = '@mferrare';

// Default text for ContactAdmin component
export const defaultContactAdminText = "If you have any queries please contact";

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

// Displays information about the Digital Law Lab administrator.  Of course,
// This assumes there is only one administrator!  That could be a problem in
// the future but isn't one now.
// TODO: The 'full_url' displays a Markdown URL.  It does not get renedered as
//       a URL but literally.  I've asked a question on Discord about this:
//       https://discord.com/channels/398180168688074762/867060369087922187/1086550144431960154
export function DisplayAdminData(props) {
    if (props.data == 'name') {
        return dll_admin_name;
    } else if (props.data == 'url') {
        return dll_admin_url;
    } else if (props.data == 'full_url') {
        return '[' + dll_admin_name + '](' + dll_admin_url + ')';
    } else if (props.data == 'github') {
        return dll_admin_github;
    } else {
        return 'ERROR: data: ' + props.data + ' does not exist';
    }
}

// Incorporating the display of all cloud services into this Component.  At time
// of writing this is:
// - Docassemble dev server
// - Docassemble prod server
// - our Slack
// - our GitHub
// - our Google Drive
//
// What to display is in props.data
export function DisplayServiceData(props) {
    let result = "";
    switch (props.data) {
        case 'dev_server':
            result = 'https://dev.dll.org.au/da/';
            break;
        case 'prod_server':
            result = 'https://app.dll.org.au/da/';
            break;
        case 'slack':
            result = 'https://digital-law-lab.slack.com';
            break;
        case 'github':
            result = 'https://github.com/Digital-Law-Lab';
            break;
        case 'google_drive':
            result = 'https://drive.google.com/drive/folders/1fK41cjHrIeqfOmdmi-0lF3dOtZAjgYf9';
            break;
        default:
            result = 'DisplayServiceData: Incorrect data supplied';j
    }
    return result;
}