import { useRef, useState } from "react";
import bannerImg from "../../../src/assets/image/bannerImg.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import TopColleges from "./TopColleges";
import GraduateGallery from "./GraduateGallery";

const Home = () => {
  const [college, setCollege] = useState(null);
  const searchRef = useRef("");
  const handleRef = () => {
    const search = searchRef.current.value;
    console.log(search);
    fetch(`https://edu-booking-server.vercel.app/college?search=${search}`)
      .then((res) => res.json())
      .then((data) => setCollege(data));
  };
  // console.log(college);
  
  return (
    <>
      <div>
        {/* hero section  */}
        <div className="hero min-h-screen bg-gradient-to-r from-cyan-100 via-teal-50 to-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="lg:w-2/3">
              <img src={bannerImg} className="rounded-lg w-full" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-slate-600">
                Unlock Your Educational Journey with EduBooking!
              </h1>
              <p className="py-6 text-slate-500">
                Discover a world of learning opportunities and seamless
                educational bookings with EduBooking. Explore top-notch
                institutions, courses, and events to shape your future. Your
                educational aspirations, simplified.
              </p>
              <div className="relative mb-4 flex w-2/4 flex-wrap items-stretch">
                <input
                  ref={searchRef}
                  type="search"
                  className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-lg border border-solid border-green-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-900 focus:shadow-[inset_0_0_0_1px_rgb(59, 202, 140)] focus:outline-none dark:border-neutral-600 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:border-primary"
                  placeholder="Find Your Perfect College"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

                <button
                  className="input-group-text bg-cyan-700 px-5 flex items-center whitespace-nowrap rounded mx-3 py-1.5 text-center text-white font-normal "
                  id="basic-addon2"
                  onClick={handleRef}
                >
                  Explore
                </button>
              </div>
              {college?.college_image &&  (
                <div>
                  <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure>
                      <img src={college?.college_image} alt="college_image" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{college?.college_name}</h2>
                      <p><FaStar className="inline me-3" />{college?.college_rating} </p>
                      <p>Apply Deadline : {college?.admission_date}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-ghost btn-block"> <Link to={`/college/details/${college?._id}`}>details</Link> </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) }
            </div>
          </div>
        </div>

        {/* top college section  */}
        <TopColleges/>

        {/* GraduateGallery  */}
        <GraduateGallery/>
      </div>
    </>
  );
};

export default Home;
