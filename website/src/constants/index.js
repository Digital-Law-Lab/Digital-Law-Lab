// Global constants used throughout the site
import React from 'react';

// Digital Law Lab administrator.  
// Name, and contact URL
export const dll_admin_name = 'Mark Ferraretto';
export const dll_admin_url = 'https://github.com/mferrare';
export const dll_admin_github = '@mferrare';

// Default text for ContactAdmin component
export const defaultContactAdminText = "If you have any queries please contact";

// Location of Google Drive folder
export const google_drive_url   = 'https://drive.google.com/drive/folders/1fK41cjHrIeqfOmdmi-0lF3dOtZAjgYf9';

// Constants for DisplayServiceData component
export const dsd_dev_server     = 'https://dev.dll.org.au/da/';
export const dsd_prod_server    = 'https://dev.dll.org.au/da/';
export const dsd_github_org     = 'https://github.com/Digital-Law-Lab';
export const dsd_dll_repo       = dsd_github_org + '/Digital-Law-Lab';
export const dsd_dpm            = dsd_dll_repo + '/blob/main/docassemble_playground_manager.py';
export const dsd_slack          = 'https://digital-law-lab.slack.com';
export const dsd_google_drive   = google_drive_url;

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


export function DisplayAdminData(props) {
    // Expect: props.data - key to if statement (in body)
    // Return: string with information requested
    // Displays information about the Digital Law Lab administrator.  Of course,
    // This assumes there is only one administrator!  That could be a problem in
    // the future but isn't one now.
    // TODO: The 'full_url' displays a Markdown URL.  It does not get renedered as
    //       a URL but literally.  I've asked a question on Discord about this:
    //       https://discord.com/channels/398180168688074762/867060369087922187/10865501444319601540
    if (props.data == 'name') {
        return dll_admin_name;
    } else if (props.data == 'url') {
        return dll_admin_url;
    } else if (props.data == 'full_url') {
        return <a href={dll_admin_url}>{dll_admin_name}</a>
    } else if (props.data == 'github') {
        return dll_admin_github;
    } else {
        return 'ERROR: data: ' + props.data + ' does not exist';
    }
}

export function DisplayServiceData(props) {
    // Expect: props.data - key for service (as per switch statement in body)
    //         props.service_name - name of service.  Is the name of the link returned
    // Return: anchor tag with link to service
    //
    // Incorporating the display of all cloud services into this Component.  At time
    // of writing this is:
    // - Docassemble dev server
    // - Docassemble prod server
    // - our Slack
    // - our GitHub
    // - our Google Drive
    //
    // Assumes services available via web as returns anchor link
    let result = "";
    let service_name = "";


    switch (props.data) {
        case 'dev_server':
            result = dsd_dev_server;
            break;
        case 'dll_repo':
            result = dsd_dll_repo;
            break
        case 'dpm':
            result = dsd_dpm;
        case 'prod_server':
            result = dsd_prod_server;
            break;
        case 'slack':
            result = dsd_slack;
            break;
        case 'github':
            result = dsd_github_org;
            break;
        case 'google_drive':
            result = dsd_google_drive;
            break;
        default:
            result = 'DisplayServiceData: Incorrect data supplied';
    }
    if (props.service_name) {
        service_name = props.service_name;
    } else {
        service_name = "No service defined";
    }
    return <span><a href={result}>{service_name}</a></span>
}

// Constants for DisplayImage. 
// Border styles
export const DI_shadow_block = 'disb';
export const DI_inline_shadow = 'diis';
export const DI_border_styles = {
    [DI_shadow_block]: {
        borderRadius: '5px',
        display: 'block',
        margin: '20px auto',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.25)'
    },
    [DI_inline_shadow] : {
        borderRadius: '5px',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.25)'
    }
}