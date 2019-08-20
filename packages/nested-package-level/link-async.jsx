import React from "react";
import Loadable from 'react-loadable';

export const LinkAsync = Loadable({
    loader: () => import('./link'),
    render(loaded, props) {
        const { Link } = loaded;
        return <Link {...props} />;
    },
    loading() {
        return <div>Loading...</div>
    }
});
