import React from "react";
import amazon from '../assets/images/client/delivery.png';
import google from '../assets/images/client/delhiveylogo.png';
import lenovo from '../assets/images/client/iitdelhi.png';
import paypal from '../assets/images/client/kaggle-logo.png';
import shopify from '../assets/images/client/credmark-logo.png';
import spotify from '../assets/images/client/cii-logo.png';
export default function CompanyLogo(){
    return(
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div className="mx-auto py-4">
                <img src={google} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={amazon} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={lenovo} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={paypal} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={shopify} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={spotify} className="h-6" alt="" />
            </div>
        </div>
    )
}