import React from 'react'
import { Link } from 'react-router-dom';

import ab03 from '../../assets/images/about/ab03.jpg';
import ab02 from '../../assets/images/about/ab02.jpg';
import ab01 from '../../assets/images/about/ab01.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
// manageent team is coming from components
import ManagementTeam from '../../component/managementTeam';
import Myproject from '../Myproject/Myproject';
import CompanyLogo from '../../component/companyLogo';

import {FaArrowRight,FiAirplay} from '../../assets/icons/icons'
import {FaLinkedin} from '../../assets/icons/icons'
import { FaGithub } from "react-icons/fa";

// import TinySlider from 'tiny-slider-react';
import CountUp from 'react-countup';
import { feedback } from '../../data/data';
import { consultingAbout, consultingProduct, consultingServices } from '../../data/dataTwo';
import Education from '../Myproject/Education';
import IndexPersonal from './indexPersonal';
export default function IndexConsulting() {
    return (
        <>
            <Navbar navClass="nav-light" />
            
            <section className="relative md:py-60 py-36 bg-[url('../../assets/images/consulting/bg.jpg')] bg-right bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 items-center mt-10">
                        <span className="text-white/80 font-bold mb-4 text-xl">Hi, I am</span>
                        <h4 className="font-extrabold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Nishchal Gaba <br />AI & Blockchain Expert</h4>
                        <p className="text-white/60 text-xl max-w-xl font-extrabold">I help businesses research, integrate and execute AI & Web3 Solutions. Happy to tag along your product development journey if you are building something amazing.</p>

                        <div className="mt-8 ">
                        <ul className="list-none mt-5 space-x-1 space-y-1">
                                    <li className="inline"><Link to="https://www.linkedin.com/in/nishchal-gaba-295701a5/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaLinkedin className='text-sm bg-white h-6 w-6'/></Link></li>
                                    <li className="inline"><Link to="https://github.com/nishgaba-ai" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaGithub className='text-sm bg-white h-6 w-6'/></Link></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
                <div className="container relative">
                    <CompanyLogo/>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Area of Expertise</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">These 3 areas are my life's passion, research expertise and areas I would love to help everyone grow.</p>
                    </div>
 {/* this map is to show Business Consulting Services */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {consultingServices.map((item,index)=>{
                            return(
                                <div className="group relative" key={index}>
                                    <div className="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                        <img src={item.image} className="" alt="" />
                                        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                    </div>

                                    <div className="mt-6">
                                        <Link to="#" className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.title}</Link>

                                        <p className="text-slate-400 mt-4">{item.desc}</p>

                                        
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
 {/* this one is showing  Business and technology */}
            <section className="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="grid grid-cols-12 gap-6 items-center">
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <img src={ab03} className="shadow rounded-md" alt="" />
                                        <img src={ab02} className="shadow rounded-md" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <img src={ab01} className="shadow rounded-md" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="flex mb-4">
                                    <span className="text-indigo-600 text-2xl font-bold mb-0"><CountUp className="counter-value text-6xl font-bold"start={1} end={12}></CountUp>+</span>
                                    <span className="self-end font-semibold ms-2">Years <br /> Experience</span>
                                </div>

                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">AI & Blockchain Research <br /> </h3>

                                <p className="text-slate-400 max-w-xl">From Working with giants like Target US Retail, Delhivery, academia like IIT Delhi to web3 firms across US and Singapore, the journey has been an enriching one. Each day getting better is the key, I try new reserach, play with AI models and build out web3 ideas to reality.If you are looking for a trusted partner on your team, I think we would gel up well :)</p>

                                <div className="mt-6">
                                    <Link to="/contact" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-2"><FiAirplay className="me-1"/> Contact Me</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                    {/*  this is is to show learn more options */}
                <div className="container relative mt-16">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        {consultingAbout.map((item, index) => {
                            let Icons = item.icon
                            return(
                                <div key={index} className="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                                     <Icons className="h-10 w-10 stroke-1 text-indigo-600"/>

                                    <div className="content mt-6">
                                        <Link to="/page-services" className="title h5 text-xl font-semibold hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-4">{item.desc}</p>

                                        
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
           
            <Education/>
            <IndexPersonal/>
          
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                        <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold m-auto">My Publications</h3>
                            <p className="text-slate-400 max-w-xl text-center">Check out my past articles and public research to get a glimpse of some of the past work.
NOTE: I am unable to share some of the research materials due to client confidentiality</p>
                        </div>
                    </div>
                    {/* this one is to show our digital product */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-2">
                        {consultingProduct.map((item, index) => {
                            return(
                            <div className="picture-item p-4 rounded-md" key={index}>
                                <div className="">
                                    <div className="relative">
                                        <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img src={item.image} className="rounded-t-md shadow " alt="" />
                                    </a>
                                        </div>
                                    </div>

                                    <div className="pt-4 px-3">
                                        <h5 className="mb-1 font-semibold text-lg"><a href={item.link}  target='_blank'rel="noreferrer" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.title}</a></h5>
                                        <span className="text-slate-400">{item.name}</span>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                        <div className="md:col-span-12 text-center">
                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
{/* this one is to show trusted by more than 10k users  */}
                <div className="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
                    <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
                    <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Trusted by more than 40 firms
</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">From Startups to Enterprises, I have been fortunate to work alongside some amaziing teams..</p>
                    </div>

                    <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={1} end={200} />+</h1>
                            <h5 className="counter-head text-lg font-medium">Projects Delivered</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={1} end={5} />+</h1>
                            <h5 className="counter-head text-lg font-medium">Award Gained</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={0} end={9} />+</h1>
                            <h5 className="counter-head text-lg font-medium">Years Experience</h5>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">What Our Client Say ?</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Some honest feedback from the work I have had the fortune to do with some of the best minds.</p>
                        
                    </div>

                    <div className="flex justify-center relative mt-16">
                        <div className="relative md:w-1/2 w-full">
                            <div className="absolute -top-20 md:-start-24 -start-0">
                                <i className="mdi mdi-format-quote-open text-9xl opacity-5"></i>
                            </div>

                            <div className="absolute bottom-28 md:-end-24 -end-0">
                                <i className="mdi mdi-format-quote-close text-9xl opacity-5"></i>
                            </div>

                            <div className="tiny-single-item">
{/* this one is to show feedback */}
                                
                                <div>
                                    {feedback.map((item, id) => {
                                        return(
                                            <div className="tiny-slide" key={id}>
                                                <div className="text-center">
                                                    <p className="text-lg text-slate-400 italic"> {item.description} </p>
    
                                                    <div className="text-center mt-5">
                                                        <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                        </ul>
    
                                                        <img src={item.image} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="" />
                                                        <h6 className="mt-2 font-semibold">{item.name}</h6>
                                                        <span className="text-slate-400 text-sm">{item.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <ManagementTeam className="relative md:mt-24 mt-16" id={""} />
                <Myproject className="relative md:mt-24 mt-16" id={""}/>
            </section>
            <Footer />
        </>
    )
}
