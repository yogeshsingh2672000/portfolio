function Hero() {
    return (
        <div className='bg-[#000000] h-screen text-white flex flex-col gap-[50px] justify-center items-center'>
            <img className="w-40 h-40 rounded-full object-cover" src="/profile.jpeg" alt="profile" loading="lazy" />
            <div className="grid place-items-center">
                <div>Hi there!👋 My name is </div>
                <div className='hero-banner-text text-[3.5rem] md:text-[6rem] lg:text-[8rem] text-center'>Yogesh Kumar</div>
                <div>A Full Stack Developer</div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-[20px]'>
                <a className="border border-[#c9c7c9] hover:bg-[#ffffff33] transition-colors ease-in-out rounded-[5px] px-[15px] py-[5px]" href="#about"><button className='hero-button'>About</button></a>
                <a className="border border-[#c9c7c9] hover:bg-[#ffffff33] transition-colors ease-in-out rounded-[5px] px-[15px] py-[5px]" href="#skills"><button className='hero-button'>Skills</button></a>
                <a className="border border-[#c9c7c9] hover:bg-[#ffffff33] transition-colors ease-in-out rounded-[5px] px-[15px] py-[5px]" href="#experience"><button className='hero-button'>Experience</button></a>
                <a className="border border-[#c9c7c9] hover:bg-[#ffffff33] transition-colors ease-in-out rounded-[5px] px-[15px] py-[5px]" href="#projects"><button className='hero-button'>Projects</button></a>
                <a className="border border-[#c9c7c9] hover:bg-[#ffffff33] transition-colors ease-in-out rounded-[5px] px-[15px] py-[5px]" href="#contact"><button className='hero-button'>Contact</button></a>
            </div>
        </div>
    )
}

export default Hero