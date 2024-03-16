
import './Banner.css'
const Banner = () => {
    return (

<div className="hero h-[600px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/VJqWTs1/turkish-breakfast-fried-eggs-brunch.jpg)' }}>
  <div className="hero-content  text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">
        Discover an exceptional <span className="">cooking <br /> class</span> tailored for you!
      </h1>
      <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
      
      <div className='flex justify-center gap-9'>
      <button className="btn bg-[#0BE58A] border-none rounded-[50px] text-[#150B2B]  font-semibold text-xl">Explore Now</button>
      <button className="btn btn-ghost border-none rounded-[50px]  font-semibold text-white text-xl">Our Feedback</button>
      </div>
    </div>
  </div>
</div>




    );
};

export default Banner;