import './App.css';
import React from 'react';
import { FunctionContextComponent } from '../components/FunctionContextComponent/FunctionContextComponent';
import { InfoProvider } from '../InfoProvider';



export default function App() {
  return (
    <InfoProvider>
      <FunctionContextComponent />
    </InfoProvider>
  );
}

