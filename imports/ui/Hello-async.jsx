import React from "react";
import Loadable from 'react-loadable';

export const HelloAsync = Loadable({
  loader: () => import('./Hello'),
  loading() {
    return <div>Loading...</div>
  }
});
