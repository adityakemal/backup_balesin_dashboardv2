import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import routes from './routes';
import { PrivateRoute, PublicRoute } from './app/helper';

function App() {

  return (
      <Routes>
        {
          routes.map(({ path, element, isPrivate }) => (
            <Route
              key={path}
              path={path}
              element={
                isPrivate ?
                  <PrivateRoute>{element}</PrivateRoute>
                  :
                  <PublicRoute>{element}</PublicRoute>
              }
            />
          ))
        }
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
}

export default App;
