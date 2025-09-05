"use client"
import React from 'react'
import { Dialog, DialogPanel, Transition, Tab, TransitionChild } from '@headlessui/react';
import { useState, Fragment } from 'react';
import IconMail from '@/components/icon/icon-mail';
import IconLock from '@/components/icon/icon-lock';
import Link from 'next/link';

export default function Login() {
    // const swiperRef = useRef<any>();
    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];

    const [modal20, setModal20] = useState(false);

    return (
        <>
            {/* <button type="button" onClick={() => setModal20(true)} className="text-gray-700  px-8 py-2 rounded-[15px] border shadow-sm border-1 hover:border-green-600"> */}
                <Link onClick={() => setModal20(true)}
                                           href="#"
                                           className="text-blue-600 hover:text-blue-800 font-medium"
                                       >
                                           Login
                                       </Link>
            {/* </button> */}


            <Transition appear show={modal20} as={Fragment}>
                <Dialog as="div" open={modal20} onClose={() => setModal20(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="login_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="panel border-0 py-1 px-4 rounded-lg overflow-hidden w-full max-w-sm my-8 text-black dark:text-white-dark">
                                    
                                    <div className="flex items-center justify-between p-5 font-semibold text-lg dark:text-white">
                                        {/* <div className='flex justify-center'>
                                        <img src="/assets/landing/logo2.png" alt="img"/>
                                    </div> */}
                                        <h5>Login</h5>

                                        <button
                                            type="button"
                                            onClick={() => setModal20(false)}
                                            className="p-2 rounded-full hover:bg-gray-200 transition"
                                            >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-white-dark hover:text-black transition"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                    </div>

                                    <div className="p-5">
                                        <form>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    {/* <svg>...</svg> */}
                                                    <IconMail />
                                                </span>
                                                <input type="email" placeholder="Email" className="form-input ltr:pl-10 rtl:pr-10 
                                                " id="login_email" />
                                            </div>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    {/* <svg>...</svg> */}
                                                    <IconLock />
                                                </span>
                                                <input type="password" placeholder="Password" className="form-input ltr:pl-10 rtl:pr-10" id="login_password" />
                                            </div>
                                            <div className="flex items-center justify-between text-sm py-2">
                                                <label className="flex items-center gap-2 text-white-dark dark:text-gray-300 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointe"
                                                    />
                                                    Remember me
                                                </label>
                                                <a
                                                    href="#"
                                                    className="text-white-dark hover:underline hover:text-[#4361ee]"
                                                    // className="text-gray-500 dark:text-gray-300 hover:underline hover:text-[#4361ee]"

                                                >
                                                    Forgot Password?
                                                </a>
                                            </div>
                                             <Link href="/analytics">
                                            <button type="button" className="btn btn-primary w-full">
                                            
                                                Login
                                            </button>
                                              </Link>
                                        </form>
                                    </div>
                                    {/* <div className="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
                                    <div className="flex items-center justify-center gap-3 mb-5">
                                        <button type="button" className="btn btn-outline-primary flex gap-1">
                                           

                                            <span>Facebook</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-danger flex gap-1">
                                           
                                            <span>Github</span>
                                        </button>
                                    </div> */}
                                    <div className="p-5 border-t border-[#ebe9f1] dark:border-white/10">
                                        <p className="text-sm text-center text-white-dark dark:text-white-dark/70">
                                            Looking to
                                            <button type="button" className="text-[#515365] hover:underline dark:text-white-dark ltr:ml-1 rtl:mr-1">
                                                create an account?
                                            </button>
                                        </p>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
          
        </>
    )
}
