// import {Banner1, Banner2, Banner3, Banner4} from "../../../public/"
function About() {
    return (
        <>
            <div id="about" className="flex flex-col md:flex-row gap-[20px] px-[20px] md:px-[40px] lg:px-[100px] md:gap-[40px] py-[60px] md:py-[80px] lg:py-[100px]">
                <div className="meet-yk-heading whitespace-nowrap text-[32px] md:text-[48px]">Meet Yogesh Kumar</div>
                <div className="meet-yk-desc">
                    Peek behind the code and unveil the creative genius of Yogesh Kumar, a
                    Full Stack Software Developer crafting remarkable digital experiences.
                    Spoiler alert: You’ll be amazed by what you discover!
                </div>
            </div>
            <div className="bg-[#778DA9] py-[20px] md:py-[50px] lg:py-[100px] grid grid-cols-1 md:grid-cols-2 gap-[20px] px-[20px] md:px-[50px] lg:px-[100px]">
                <div className="flex flex-col gap-[20px]">
                    <img className="rounded-[30px]" src="/banner1.jpg" alt="" />
                    <img className="rounded-[30px]" src="/banner2.jpg" alt="" />
                </div>
                <div className="flex flex-col gap-[20px]">
                    <img className="rounded-[30px]" src="/banner3.jpg" alt="" />
                    <img className="rounded-[30px]" src="/banner4.jpg" alt="" />
                </div>
            </div>
        </>
    );
}

export default About;
