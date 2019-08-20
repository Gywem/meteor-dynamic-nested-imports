import React from "react";

export const Link = ({ link }) => {
    import {DEFAULT_LINK_TARGET} from "imports/ui/Info";

    return (
        <li key={link._id}>
            <a href={link.url} target={DEFAULT_LINK_TARGET}>{link.title}</a>
        </li>
    );
};
