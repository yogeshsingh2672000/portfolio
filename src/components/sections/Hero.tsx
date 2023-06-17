function Hero() {
    return (
        <div className='bg-[#000000] w-full h-screen text-white flex flex-col gap-[50px] justify-center items-center'>
            <div>Geometry</div>
            <div className='hero-banner-text text-[3.5rem] md:text-[8rem] lg:text-[14rem]'>Welcome</div>
            <div className='flex flex-col md:flex-row gap-[20px]'>
                <button className='hero-button'>About</button>
                <button className='hero-button'>Experience</button>
                <button className='hero-button'>Projects</button>
                <button className='hero-button'>Contact</button>
            </div>
        </div>
    )
}

export default Hero