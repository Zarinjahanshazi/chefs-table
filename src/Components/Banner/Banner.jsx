
import './Banner.css'
const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto  back">
            <div className="hero min-h-screen" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> <span className='block'>Discover an exceptional cooking</span> <br /> class tailored for you!</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className='flex justify-center gap-9'>
      <button className="btn bg-[#0BE58A] border-none rounded-[50px]  font-semibold text-xl">Explore Now</button>
      <button className="btn btn-ghost border-none rounded-[50px]  font-semibold text-xl">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;