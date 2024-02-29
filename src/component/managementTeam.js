import React from 'react'
import { Link } from 'react-router-dom';

import * as Icon from 'react-feather'
import {FaArrowRight} from '../assets/icons/icons'

import { blogData} from '../data/data';

export default function ManagementTeam(props) {
    return (
        <section className={props.className} id={props.id}>
          
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blog Or News</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Check out my latest blogs or news features.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">

                    {blogData.map((data,index) => {
                        return(
                            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden" key={index}>
                                <a href={data.link} target="_blank" rel="noopener noreferrer">
                                <img src={data.image} alt="" />
                                </a>
    
                                <div className="content p-6">
                                    <a href={data.link} target="_blank" rel="noopener noreferrer" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{data.title}</a>
                                    <p className="text-slate-400 mt-3">{data.desc}</p>
    
                                    
                                    <div className="mt-4">
                                    <a href={data.link} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500">
                                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                                    </a>
                                </div>

                                   
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
