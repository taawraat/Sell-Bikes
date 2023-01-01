import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Heading from './components/Heading';
import Grid from './components/Grid';
import AddButton from './components/AddButton';
import Add from './components/Add';
import Edit from './components/Edit';
import Footer from './components/Footer';
import Contact from './components/Contact';
import CustomerReview from './components/CustomerReview';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/> <Heading title="Our Services"/> <Grid/> <Heading title="Customer Review"/> <CustomerReview/> <Heading title="Contact Us"/> <Contact/> </>} />
          <Route path="/services" element={<><Heading title="All Services"/> <Grid/> <AddButton/></>} />
          <Route path="/addNew" element={<><Add/></>} />
          <Route path="/banner" element={<><Heading title="Banner Section"/><Banner/></>} />
          <Route path="/edit/:id" element={<><Heading title="Edit User"/><Edit/></>} />
          <Route path="/contact" element={<><Heading title="Contact Us"/><Contact/></>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
