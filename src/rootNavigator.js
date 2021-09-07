import * as React from 'react';

export const navigationRef = React.createRef();

//Funcion auxiliar para navegacion
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
