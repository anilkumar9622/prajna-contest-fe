import React from 'react'

const HeroAbout = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        
        <div className="flex  items-center justify-center">
          
           <img
              src="/about/1.png"
              alt="blog"
              className=" object-fit w-full"
            />
        

         
        </div>

        {/* Text Content */}
        <div className="-mt-82 ">
          <span className="bg-[#E31E24] text-white px-6 py-3 rounded-full text-lg font-medium">
            Our Blogs / News
          </span>
          <h2 className="mt-4 text-3xl  font-michroma leading-13">
            Market Insights & <br /> Forex Stories
          </h2>
          <p className="mt-4 max-w-2xl text-lg  mx-auto">
            Stay updated with the latest trends, expert analysis, and
            market-moving news. Your daily dose of clarity and confidence in the
            ever-changing world of forex trading.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroAbout