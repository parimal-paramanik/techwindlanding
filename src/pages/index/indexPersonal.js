import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import hero from '../../assets/images/personal/hero.jpg';
import dots from '../../assets/images/illustrator/dots.svg';
import shree_logo from '../../assets/images/client/shree-logo.png';
import google_logo from '../../assets/images/client/google-logo.png';
import lenovo_logo from '../../assets/images/client/lenovo-logo.png';
import circle_logo from '../../assets/images/client/circle-logo.png';
import cta from "../../assets/images/personal/cta.jpg"
import heroBg from "../../assets/images/personal/hero-overlay.png"

import Navbar from '../../component/Navbar/navbar'
import CookieModal from '../../component/cookieModal';
import SmallFooter from '../../component/Footer/smallFooter';
import CompanyLogo from '../../component/companyLogo';

import { TypeAnimation } from 'react-type-animation';
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FaArrowRight ,FiCamera } from '../../assets/icons/icons'

import { personalServices,portfolioData,portfolioImage } from '../../data/dataFour';

export default function IndexPersonal() {
    const [isOpen, setOpen] = useState(false); 
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImage, setIsImage] = useState(false);

   
    return (
        <>
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center ">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Work Experience</h3>

                    </div>

                    <div className="grid grid-cols-1 mt-8 border-2 border-red-500">
                        <div className=" relative after:content-[''] after:absolute after:top-0 md:after:end-0 md:after:start-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
                            <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900 border-2 border-red-500  w-[50%]">
                                <div className="grid md:grid-cols-2">
                                    <div className="md:text-end md:me-8 relative">
                                    </div>

                                    <div className="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                                        <h5 className="title mb-1 font-semibold">UX / UI Designer</h5>
                                        <p className="mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                    </div>
                                </div>
                            </div>



                            <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900 border-2 border-red-500 ">
                                <div className="grid md:grid-cols-2">
                                    <div className="md:text-end md:me-8 relative">
                                    </div>

                                    <div className="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                                        <h5 className="title mb-1 font-semibold">UX / UI Designer</h5>
                                        <p className="mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                    </div>
                                </div>
                            </div>





                            <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900 border-2 border-red-500 ">
                                <div className="grid md:grid-cols-2">
                                    <div className="md:text-end md:me-8 relative">
                                    </div>

                                    <div className="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                                        <h5 className="title mb-1 font-semibold">UX / UI Designer</h5>
                                        <p className="mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                    </div>
                                </div>
                            </div>




                            <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900 border-2 border-red-500 ">
                                <div className="grid md:grid-cols-2">
                                    <div className="md:text-end md:me-8 relative">
                                    </div>

                                    <div className="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                                        <h5 className="title mb-1 font-semibold">UX / UI Designer</h5>
                                        <p className="mt-3 mb-0 text-slate-400">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                    </div>
                                </div>
                            </div>

                           

                           

                            
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}
