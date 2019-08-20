import React from "react";
import Loadable from 'react-loadable';

export const InfoAsync = Loadable({
  loader: () => import('./Info'),
  loading() {
    return <div>Loading...</div>
  }
});
