import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const College = () => {
  const [colleges, setCollege] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, []);
  return (
    <div className="min-h-screen pt-20 bg-base-200">
      <div className="hero ">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl  max-w-md mx-auto font-bold text-slate-600">
              Discover Your Ideal College
            </h1>
            <p className="py-6 text-slate-700">
              Explore and Discover Your Dream College! Our platform offers
              diverse colleges with top-notch faculty and exciting
              extracurriculars. Find your ideal institution, be it engineering,
              medical, business, or arts-focused. Take the first step towards a
              bright future with us!
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 px-20 space-y-5">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="card lg:card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={college?.college_image}
                alt="Album"
                className="w-64 h-64 m-2 rounded-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl text-teal-500">{college?.college_name}</h2>
              <Rating
                placeholderRating={`${college?.college_rating}`}
                readonly
                emptySymbol={<FaRegStar className="text-yellow-500 text-xl" />}
                placeholderSymbol={<FaStar className="text-yellow-500 text-xl" />}
                fullSymbol={<FaStar className="text-yellow-500 text-xl" />}
              />
              <p className="text-teal-600">Research Papers Published : {college?.number_of_research}+</p>
              <p className="text-orange-400">Addmission deadline : {college?.admission_date}</p>
              <div className="card-actions">
                <button className="btn normal-case px-10 text-teal-500"><Link to={`/college/details/${college?._id}`}>Details</Link></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default College;
