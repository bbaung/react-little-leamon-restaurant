import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
      <Nav/>

      <Header
        title="Little Lemon"
        sub_title="Chicago"
        content="We are a family owned Mediterraneran restaurnat, focused on traditional recipes servred with a mondern twist."
        button_text = "Reserve Table"
      />

      <BookingForm/>
    </>
  );
}

export default App;
