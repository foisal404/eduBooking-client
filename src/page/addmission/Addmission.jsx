import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Addmission = () => {
  const [colleges, setCollege] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, []);
  return (
    <div className="min-h-screen pt-16">
      <h2 className="text-center text-5xl text-slate-600 font-bold my-5">
        Admission Journey{" "}
      </h2>
      <p className="text-center text-lg text-slate-600 italic">
        Your Path to Academic Excellence
      </p>
      <div className="w-1/2 mx-auto p-20 space-y-3">
        {colleges.map((college) => (
          <div key={college?._id} className="bg-slate-200 rounded-xl">
            <p className="text-xl font-bold py-5 text-center uppercase">{college?.college_name} <FaAngleRight className="inline"/></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addmission;
