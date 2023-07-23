import bannerImg from "../../../src/assets/image/bannerImg.png";

const Home = () => {
  return (
    <>
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-cyan-100 via-teal-50 to-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-2/3">
            <img src={bannerImg} className="rounded-lg w-full" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Unlock Your Educational Journey with EduBooking!</h1>
            <p className="py-6">
            Discover a world of learning opportunities and seamless educational bookings with EduBooking. Explore top-notch institutions, courses, and events to shape your future. Your educational aspirations, simplified.
            </p>
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
