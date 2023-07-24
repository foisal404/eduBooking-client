import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopColleges = () => {
  const [colleges, setCollege] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setCollege(data.slice(0, 3)));
  }, []);
  return (
    <div className="min-h-screen  flex flex-col justify-center">
        <h2 className="text-5xl font-bold my-10 text-center text-slate-600">
        Discover Your Educational Destinations
        </h2>
      <div className="grid grid-cols-3 justify-items-center place-items-center-center h-full">
        {colleges.map((college) => (
          <div key={college?._id} className="card w-96 glass">
            <figure>
              <img src={college?.college_image} className="h-60 w-full" alt="college_image" />
            </figure>
            <div className="card-body text-sm">
              <h2 className="card-title text-xl text-teal-600">{college?.college_name}</h2>
              <p >Addmission Deadline : {college?.admission_date}</p>
              <p>Research Papers Published : {college?.number_of_research}+</p>
              <p>On Campus Events : {college?.events?.length}+</p>
              <p>Sports : {college?.sports?.length}+</p>
              <div className="card-actions justify-end">
              <button className="btn bg-teal-300 text-slate-800 btn-block"> <Link to={`/college/details/${college?._id}`}>details</Link> </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopColleges;
