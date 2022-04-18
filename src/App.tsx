import React from 'react';
import {SnackbarKey, SnackbarMessage, SnackbarProvider} from 'notistack';
import { Provider as DataProvider } from 'react-redux';
import {Alert} from "@mui/material";
import { MainPage } from "./components/MainPage";
import { store } from "./store";
import './App.css';

function App() {

  return (
      <DataProvider store={store}>
          <SnackbarProvider
              dense
              autoHideDuration={6000}
              preventDuplicate
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
              }}
                  content={(key: SnackbarKey, message: SnackbarMessage) => (
                  <Alert severity="success">{message}</Alert>
              )}
          >
              <div className="App">
                  <MainPage />
              </div>
          </SnackbarProvider>
      </DataProvider>
  );
}

export default App;
