// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './GraduateSGallery.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";

const GraduateGallery = () => {
    const [gallery,setGallery]=useState([])
    useEffect(()=>{
        fetch('https://edu-booking-server.vercel.app/gallery')
        .then(res=>res.json())
        .then(data=>setGallery(data))
    },[])
    return (
        <div className="min-h-screen bg-slate-100 w-full  flex flex-col justify-center">
            <h2 className="text-5xl font-bold my-10 text-center text-slate-600">Graduate Gallery: Celebrating Academic Milestones</h2>
            <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}

          
          className="mySwiper"
        >
          {gallery.map((college) => (
            <SwiperSlide key={college._id}>
              <div className="p-5">
                <div className="card rounded-none card-compact  bg-base-100 shadow-xl">
                
                  <div className='grid grid-cols-2 gap-2 p-2'>
                  <img src={college?.images[0]} className="h-40 w-44  mx-auto" alt="" />
                  <img src={college?.images[2]} className="h-40 w-44   mx-auto" alt="" />
                  <img src={college?.images[1]} className="h-40 w-44   mx-auto" alt="" />
                  <img src={college?.images[3]} className="h-40 w-44   mx-auto" alt="" />
                  </div>
                
                <div className="card-body">
                  <h2 className="card-title text-center mx-auto text-teal-600">{college?.college_name}</h2>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
        </div>
    );
};

export default GraduateGallery;