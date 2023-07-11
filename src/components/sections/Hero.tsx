function Hero() {
    return (
        <div className='bg-[#000000] w-full h-screen text-white flex flex-col gap-[50px] justify-center items-center'>
                <div>Geometry</div>
            <div className="grid place-items-center">
                <div>Hi there!👋 My name is </div>
                <div className='hero-banner-text text-[3.5rem] md:text-[6rem] lg:text-[8rem]'>Yogesh Kumar</div>
                <div>A Full Stack Developer</div>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px]'>
                <a className="border border-[#c9c7c9] rounded-[5px] px-[15px] py-[5px]" href="#about"><button className='hero-button'>About</button></a>
                <a className="border border-[#c9c7c9] rounded-[5px] px-[15px] py-[5px]" href="#skills"><button className='hero-button'>Skills</button></a>
                <a className="border border-[#c9c7c9] rounded-[5px] px-[15px] py-[5px]" href="#"><button className='hero-button'>Experience</button></a>
                <a className="border border-[#c9c7c9] rounded-[5px] px-[15px] py-[5px]" href="#projects"><button className='hero-button'>Projects</button></a>
                <a className="border border-[#c9c7c9] rounded-[5px] px-[15px] py-[5px]" href="#contact"><button className='hero-button'>Contact</button></a>
            </div>
        </div>
    )
}

export default Hero