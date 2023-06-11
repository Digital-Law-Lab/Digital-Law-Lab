// Display an image with a border and other decoration suitable
// for this textbook
import React from 'react';
import * as Constants from '@site/src/constants';

export function DisplayImage(props) {

    // For the textbook we export to this root so we need to
    // prepend it to the image URL
    const imageRoot = '/Digital-Law-Lab/'

    const imageURL = imageRoot + props.imageURL;
    const altText = props.altText || 'image';
    const borderStyle = props.borderStyle || Constants.DI_shadow_block
    const css = Constants.DI_border_styles[borderStyle]
    console.log(Constants.DI_shadow_block)
    console.log(props.borderStyle)

    // Define returnValue so we can console.log() it for debugging
    // if necessary
    let returnValue = <img src={imageURL} alt={altText} style={css} />
    return returnValue;
}