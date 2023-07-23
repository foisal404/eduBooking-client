import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";

const CollegeDetails = () => {
  const loadData = useLoaderData();
  console.log(loadData);
  return (
    <div className="min-h-screen pt-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col items-start lg:flex-row">
          <img
            src={loadData?.college_image}
            className="max-w-sm rounded-lg shadow-2xl h-64 w-96"
          />
          <div>
            <h1 className="text-5xl font-bold pb-5">{loadData?.college_name}</h1>
            <span className="bg-green-200 rounded-lg p-1">
              <Rating
                placeholderRating={`${loadData?.college_rating}`}
                readonly
                emptySymbol={<FaRegStar className="text-yellow-500 text-xl" />}
                placeholderSymbol={
                  <FaStar className="text-yellow-500 text-xl" />
                }
                fullSymbol={<FaStar className="text-yellow-500 text-xl" />}
              />
              <span className="ms-2 text-slate-600 font-bold">{loadData?.college_rating}</span>
            </span>
            <p >Addmisson Deadline : <span className="text-orange-400">{loadData?.admission_date}</span></p>
            <p className="text-teal-600">Research Papers Published : {loadData?.number_of_research}+</p>
            <p className="font-bold mt-8">Events Carnivals Fest :</p>
            <li className="text-sm">
                {loadData?.events[0]}
            </li>
            <li className="text-sm">
                {loadData?.events[1]}
            </li>
            <li className="text-sm">
                {loadData?.events[2]}
            </li>
            <p className="font-bold mt-8">Sports on Campus :</p>
            <li className="text-sm">
                {loadData?.sports[0]}
            </li>
            <li className="text-sm">
                {loadData?.sports[1]}
            </li>
            <li className="text-sm">
                {loadData?.sports[2]}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
