function About() {
    return (
        <>
            <div id="about" className="bg-[#E0E1DD] flex flex-col md:flex-row gap-[20px] px-[20px] md:px-[40px] lg:px-[100px] md:gap-[40px] py-[60px] md:py-[80px] lg:py-[100px]">
                <div className="meet-yk-heading whitespace-nowrap text-[32px] md:text-[48px]">Meet Yogesh Kumar</div>
                <div className="meet-yk-desc">
                As a software developer, I am responsible for designing and building software applications. I work with a variety of programming languages and tools to create software that meets the needs of my clients. I am also responsible for testing and debugging software to ensure that it is working properly. As a software developer, I must be able to work independently as well as part of a team, and I must be able to communicate effectively with clients and other members of the development team.
                </div>
            </div>
            <div className="bg-[#778DA9] py-[20px] md:py-[50px] lg:py-[100px] grid grid-cols-1 md:grid-cols-2 gap-[20px] px-[20px] md:px-[50px] lg:px-[100px]">
                <div className="flex flex-col gap-[20px]">
                    <img className="rounded-[30px]" src="/banner1.jpg" alt="" loading="lazy"/>
                    <img className="rounded-[30px]" src="/banner2.jpg" alt="" loading="lazy" />
                </div>
                <div className="flex flex-col gap-[20px]">
                    <img className="rounded-[30px]" src="/banner3.jpg" alt="" loading="lazy" />
                    <img className="rounded-[30px]" src="/banner4.jpg" alt="" loading="lazy" />
                </div>
            </div>
        </>
    );
}

export default About;
