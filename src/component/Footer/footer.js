import React from 'react'
import { Link } from 'react-router-dom';

import logo_light from '../../assets/images/prologo.jpg';
import * as Icon from 'react-feather';

import { footerLinks, footerCompany } from '../../data/data';

import {FaRegEnvelope,FaDribbble,FaLinkedin, FaFacebookF, FaInstagram, FaTwitter,FaRegFile,FaBehance, PiShoppingCart, MdKeyboardArrowRight} from '../../assets/icons/icons'
import { FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="container relative">
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <div className="py-[60px] px-0">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div className="lg:col-span-4 md:col-span-12">
                                <div className='flex gap-5'>
                                <Link to="/#" className="text-[22px] focus:outline-none">
                                    <img src={logo_light} alt=""  height="40"  width ="40" />
                                </Link>
                                <p className='font-bold text-lg'>Prodigal AI</p>
                                </div>
                               
                                <ul className="list-none mt-5 space-x-1 space-y-1">
                                    <li className="inline"><Link to="https://www.linkedin.com/in/nishchal-gaba-295701a5/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaLinkedin className='text-sm'/></Link></li>
                                    <li className="inline"><Link to="https://github.com/nishgaba-ai" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaGithub className='text-sm'/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container relative text-center">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="md:text-start text-center">
                        <p className="mb-0">© {new Date().getFullYear()} Prodiagl Ai. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Nishchal</Link>.</p>
                    </div>

                </div>
            </div>
        </div>
    </footer>
    )
}
