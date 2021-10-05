import React from 'react';
import AppContainer from './AppContainer';
import {Provider as RecommendationsProvider} from './src/context/RecomendacionesContext';

export default function App() {
  return (
    <RecommendationsProvider>
      <AppContainer />
    </RecommendationsProvider>
  );
}
