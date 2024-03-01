import React from 'react'


import { Myprojects} from '../../data/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

export default function Myproject(props) {
    return (
        <section className={props.className} id={props.id}>
          
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">My Project Expertise</h3>
                    
                </div>

                <div className=" mt-8 w-[100%] ">
                    <Carousel 
                   responsive={responsive}
                   swipeable={false}
                   draggable={false}
                   autoPlay={true}
                   autoPlaySpeed={2000}
                   infinite={true}
                   ssr={true}
                   keyBoardControl={true}
                   showDots={false}
                   slidesToSlide={1}
                   containerClass="carousel-container"
                   dotListClass="custom-dot-list-style"
                   itemClass="carousel-item-padding-40-px"
                    >
                    {Myprojects.map((data,index) => {
                        return(
                            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden" key={index}>
                                <a href={data.link} target="_blank" rel="noopener noreferrer">
                                <img src={data.image} alt=""   />
                                </a>
    
                                <div className="content p-6">
                                    <a href={data.link} target="_blank" rel="noopener noreferrer" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{data.title}</a>
                                </div>
                            </div>
                        )
                    })}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

