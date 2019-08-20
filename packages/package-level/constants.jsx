export const DEFAULT_LINK_TARGET = '_blank';

export const getCircularLink = () => {
    import {Link} from "meteor/package-level/link";

    return Link;
};
