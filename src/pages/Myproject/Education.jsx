
import "../../../node_modules/react-modal-video/css/modal-video.css";
import "react-18-image-lightbox/style.css"
;
export default function Education() {
    return (
        <>
            <section className="relative  bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Education</h3>
                    </div>

                    <div className="grid grid-cols-1 mt-8">
                        <div className="relative after:content-[''] after:absolute after:top-0 md:after:end-0 md:after:start-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
                            <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                                <div className="grid md:grid-cols-2">
                                    <div className="md:text-end md:me-8 relative">
                                        <h5 className="my-2 font-semibold text-lg">Master of Science (M.Sc),Artificial Intelligence</h5>
                                        <h6 className="text-slate text-sm mb-0">2016 - 2017</h6>
                                    </div>

                                    <div className="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                                        <h5 className="title mb-1 font-semibold">The University of Edinburgh</h5>
                                      
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:end-0 md:after:start-0 after:-start-9 before:content-[''] before:absolute md:before:mx-auto md:before:end-0 md:before:start-0 before:-start-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                                <div className="grid md:grid-cols-2">
                                    <div className="text-start ms-8 relative md:order-2">
                                        <h5 className="my-2 font-semibold text-lg">Bachelor of Technology (B.Tech),Computer Science</h5>
                                        <h6 className="text-slate text-sm mb-0">2012 - 2016</h6>
                                    </div>

                                    <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                                        <h5 className="title mb-1 font-semibold">Guru Gobind Singh Indraprastha University</h5>
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
