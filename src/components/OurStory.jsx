const OurStory = () => {
    return (
        <div className='grid items-center grid-cols-1 m-8 md:grid-cols-2 lg:gap-56'>
        <div
         className='grid grid-cols-1 gap-8 place-items-center md:gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-inter text-[#00b8d3]'>OUR STORY</h1>
          <p className='font-inter text-[22px] leading-[26px] w-[324px] '>We're building the economic infrastructure for the internet. Businesses of every size.</p>
          </div>
          <div className='flex items-center gap-6 '>
            <img src='https://i.ibb.co/C9Rh7t7/Capture.png'/>
            <p className='w-[275px] text-[#7C7C7C]  text-[14px] leading-5 font-semibold'>A living place for curiosity and collaboration, meeting and meaning. The heart of creative community</p>
          </div>
        </div>
  
        <div 
        className='flex flex-col items-center gap-10 mt-12 md:mt-0'>

        <div className='flex flex-col gap-2'> 
          <h1 className='font-semibold text-[20px] leading-6'>1. 6 years of intense research</h1>
          <p className='text-[15px] leading-5 w-[325px] lg:w-[480px] text-[#7c7c7c]'>Our founders had a solution, This is your Email marketing specialist, newsletter service and campaign manager, all rolled into one.</p>
          </div>
          <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-[20px] leading-6'>2. Audience segmentation</h1>
          <p className='text-[15px] leading-5 w-[325px] lg:w-[480px] text-[#7C7C7C]'>Improve audience engagement by segmenting. Boost you conversions by targeting subsets from you contacts. Give them content they need.</p>
          </div>
          <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-[20px] leading-6'>3. Contact monitoring</h1>
          <p className='text-[15px] leading-5 w-[325px] lg:w-[480px] text-[#7C7C7C]'>Just import your contact list, segment your contacts and we'll get you a detailed real-time report of their activity.</p>
          </div>
  
        </div>
      </div>
    )
}


export default OurStory