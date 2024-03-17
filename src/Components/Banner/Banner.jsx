
import './Banner.css'
const Banner = () => {
    return (

<div className="hero h-[600px] mx-auto w-[1320px] rounded-3xl  " style={{ backgroundImage:  'url(https://i.ibb.co/VxqD83b/431407126-1086855752621823-372859185808807261-n.jpg)' }}>
  <div className="hero-content   text-center text-neutral-content">
    <div className=" ">
      <h1 className="mb-5 text-5xl font-bold">
        Discover an exceptional <span className="">cooking <br /> class</span> tailored for you!
      </h1>
      <p className="mb-5 text-lg font-normal">Quick cooking tutorial: Prep ingredients, follow recipe, adjust seasoning, cook as directed, and <br /> enjoy delicious homemade meals with ease.</p>
      
      <div className='flex justify-center gap-9'>
      <button className="btn bg-[#0BE58A] border-none rounded-[50px] text-[#150B2B]  font-semibold text-xl">Explore Now</button>
      <button className="btn btn-ghost border-[#FFFFFF] rounded-[50px]  font-semibold text-white text-xl">Our Feedback</button>
      </div>
    </div>
  </div>
</div>




    );
};

export default Banner;