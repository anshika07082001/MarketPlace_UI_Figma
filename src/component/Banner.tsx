import React from 'react'

const Banner = () => {
  return (
    <section className='banner row align__center'>
        <div className='banner__left column'>
            <div className='banner__content'>
                <span className='fw700 fs14'>WE'RE STILL</span>
            </div>
            <div className='banner__heading'>
                <span className='fw500 '>Filling up the spaces.</span>
            </div>
            <div className='banner__buttons row align__center'>
                <div className='banner__buttons banner--leftBtn row align__center'>
                    <span className='fs16 fw500'>Explore Marketplace</span>
                </div>
                <div className='banner__rightBtn row align__center'>
                    <span className='fs16 fw500'>See Top Deals</span>
                </div>
            </div>
        </div>
        <img className='banner__right' src='Rectangle 10342.png' alt=''/>
    </section>
  )
}

export default Banner