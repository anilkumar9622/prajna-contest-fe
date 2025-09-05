import AboutSection from '@/components/pages/About/aboutsection'
import CoursesGrid from '@/components/pages/Courses/coursegrid'
import CourseHeader from '@/components/pages/Courses/courseheader'
import Footer from '@/components/pages/Footer/footer'
import Header from '@/components/pages/Header/header'
import React from 'react'
// import Header from '../header'
// import Testimonials from '@/component/Home/testimonials'
// import CoursesGrid from '@/component/Courses/coursegrid'
// import CourseFilters from '@/component/Courses/course-filter'
// import CourseHeader from '@/component/Courses/courseheader'
// import Footer from '@/component/Footer/footer'
// import AboutSection from '@/component/Courses/aboutsection'


const CoursesPage = () => {
  return (
    <>

    <Header />
    <CourseHeader />
    {/* <CourseFilters /> */}
    <CoursesGrid />
    <AboutSection />
    <Footer />
    </>
  )
}

export default CoursesPage