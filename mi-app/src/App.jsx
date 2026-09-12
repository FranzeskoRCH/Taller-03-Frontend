import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Courses from './components/Courses/Courses'
import CourseCard from './components/CourseCard/CourseCard'
import StudentCounter from './components/StudentCounter/StudentCounter'
import Footer from './components/Footer/Footer'
function App() {
  return(
    <>
      <Navbar />
      <Hero />
      <Courses />
      <StudentCounter />
      <Footer />
    </>
  );
}

export default App
