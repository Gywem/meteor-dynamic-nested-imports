import React from "react";
import Loadable from 'react-loadable';

export const LinkAsync = Loadable({
    loader: () => import('./constants'),
    render(loaded, props) {
        import {DEFAULT_LINK_TARGET} from "meteor/nested-package-level/constants";
        const { getCircularLink } = loaded;
        const CircularLink = getCircularLink();
        return <CircularLink {...props} target={DEFAULT_LINK_TARGET} />;
    },
    loading() {
        return <div>Loading...</div>
    }
});
