import ComponentsDashboardSales from '@/components/dashboard/components-dashboard-sales';
import { Metadata } from 'next';
import React from 'react';
import Hero from './(defaults)/landing/hero';
import Highlights from './(defaults)/landing/Highlights';
import FeaturedCourses from './(defaults)/landing/features';
import WhoWeAre from './(defaults)/landing/WhoWeAre';
import MissionVision from './(defaults)/landing/mission';
// import HeaderLanding from '@/components/landing/headerLanding';
// import Footer from '@/components/layouts/footer';
import HeaderLanding from './(defaults)/landing/headerLanding';
import Footer from '@/components/pages/Footer/footer';
import BoxedSignUp from './(auth)/auth/boxed-signup/page';
export const metadata: Metadata = {
    title: 'Sales Admin',
};

const Landing = () => {
    return (
        <>
            {/* <HeaderLanding />
            <Hero />
            <Highlights />
            <FeaturedCourses />
            <WhoWeAre />
            <MissionVision />
            <Footer /> */}
            {/* <ComponentsDashboardSales /> */}
            <BoxedSignUp />
        </>
    );
};

export default Landing;
