function Hero() {
    return (
        <div className='bg-[#000000] w-full h-screen text-white flex flex-col gap-[50px] justify-center items-center'>
            <div>Geometry</div>
            <div className='hero-banner-text text-[3.5rem] md:text-[8rem] lg:text-[14rem]'>Welcome</div>
            <div className='flex flex-col md:flex-row gap-[20px]'>
                <a href="#about"><button className='hero-button'>About</button></a>
                <a href="#skills"><button className='hero-button'>Skills</button></a>
                <a href="#"><button className='hero-button'>Experience</button></a>
                <a href="#"><button className='hero-button'>Projects</button></a>
                <a href="#"><button className='hero-button'>Contact</button></a>
            </div>
        </div>
    )
}

export default Hero