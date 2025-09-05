
import Login from '@/app/login';
import ComponentsAuthRegisterForm from '@/components/auth/components-auth-register-form';
import IconFacebookCircle from '@/components/icon/icon-facebook-circle';
import IconGoogle from '@/components/icon/icon-google';
import IconInstagram from '@/components/icon/icon-instagram';
import IconTwitter from '@/components/icon/icon-twitter';
import LanguageDropdown from '@/components/language-dropdown';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';


export const metadata: Metadata = {
    title: 'Register Boxed',
};




const BoxedSignUp = () => {

    return (
        <div>
            <header className="z-40 fixed top-0 left-0 w-full">
                <div className="relative flex w-full items-center justify-between px-5 py-2 
                  bg-white/60 dark:bg-black/30 
                  backdrop-blur-md shadow-sm
                   border-b md:border-0">
                    {/* Logo + Title */}
                    <div className="horizontal-logo flex items-center">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/assets/images/auth/logo-mob.png"
                                alt="logo"
                                className="w-8"
                            />
                        </Link>
                    </div>

                    {/* Subtitle / Large Text */}
                    <div className="ml-4 text-lg font-extrabold text-[#493f8f] dark:text-white">
                        {/* Show only on mobile (smaller than md) */}
                        <span className="block md:hidden">BACE</span>

                        {/* Show on md+ (tablet/desktop) */}
                        <span className="hidden md:block">
                            Bhaktivedanta Academy for Culture and Education
                        </span>
                    </div>


                    {/* Right Side */}
                    <div className="ml-auto text-sm">
                        Already a member?{" "}
                       
                        <Login />
                    </div>
                </div>
            </header>




            <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat lg:px-6 md:px-4 py-10 dark:bg-[#060818] px-0 ">
                <div className="absolute inset-0">
                    <img src="/assets/images/auth/bg-gradient.png" alt="image" className="h-full w-full object-cover" />
                </div>


                <img src="/assets/images/auth/coming-soon-object1.png" alt="image" className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
                <img src="/assets/images/auth/coming-soon-object2.png" alt="image" className="absolute left-24 top-0 h-40 md:left-[30%]" />
                <img src="/assets/images/auth/coming-soon-object3.png" alt="image" className="absolute right-0 top-0 h-[300px]" />
                <img src="/assets/images/auth/polygon-object.svg" alt="image" className="absolute bottom-0 end-[28%]" />
                <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)] lg:mt-10 md:mt-8">

                    <div
                        className="relative flex flex-col justify-center rounded-md bg-white px-6  backdrop-blur-lg dark:bg-black/50 lg:min-h-[658px]"
                    >
                        {/* Steps Section */}
                        {/* <Stepper currentStep={currentStep} onStepClick={handleStepClick} /> */}



                        <div className="mx-auto w-full max-w-[640px] ">
                            <div className="py-10">
                                <h1 className="text-xl font-extrabold uppercase !leading-snug text-primary md:text-2xl lg:text-2xl" style={{ color: "#493f8f" }}>Registration - PRAJÑĀ 2025</h1>
                                <p className="text-base font-bold leading-normal text-white-dark text-sm md:text-md lg:text-lg">A Value Education Contest for Students</p>
                            </div>
                            {/* <div className="w-full mb-8">
                            <div className="flex items-center justify-center space-x-8">

                                <div className="flex items-center">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full    bg-blue-600 text-white font-bold">
                                        1
                                    </div>
                                    <span className="ml-2 text-blue-600 font-semibold">General Info</span>
                                </div>

                                <div className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-600"></div>

                                <div className="flex items-center">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full font-bold bg-gray-300 text-gray-700">
                                        2
                                    </div>
                                    <span className="ml-2 text-gray-600 dark:text-gray-300">Services</span>
                                </div>

                                <div className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-600"></div>

                                <div className="flex items-center">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold">
                                        3
                                    </div>
                                    <span className="ml-2 text-gray-600 dark:text-gray-300">Payment</span>
                                </div>

                               
                            </div>
                        </div> */}
                            <ComponentsAuthRegisterForm />

                            <div className="relative my-7 text-center md:mb-9">
                                <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"></span>
                                <span className="relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light">or</span>
                            </div>
                            <div className="mb-10 md:mb-[20px]">
                                <ul className="flex justify-center gap-3.5 text-white">
                                    <li>
                                        <Link
                                            href="#"
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                                            style={{ background: 'linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)' }}
                                        >
                                            <IconInstagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                                            style={{ background: 'linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)' }}
                                        >
                                            <IconFacebookCircle />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                                            style={{ background: 'linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)' }}
                                        >
                                            <IconTwitter fill={true} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                                            style={{ background: 'linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)' }}
                                        >
                                            <IconGoogle />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="text-center dark:text-white">
                                Already have an account ?&nbsp;
                                <Link href="/auth/boxed-signin" className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                                    SIGN IN
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxedSignUp;
