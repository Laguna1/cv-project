import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import Expiriense from "./components/Expiriense";
import PersonInfo from "./components/PersonInfo";

class App extends Component {
 
  render() {
    return (
      <div>
        <PersonInfo />
        <Education />
        <Expiriense />
        <ContactForm />
      </div>
    );
  }
  };

export default App;
