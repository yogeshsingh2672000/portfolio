function Skills() {
    return (
        <div id="skills" className="bg-[#778DA9] px-[20px] md:px-[50px] lg:px-[100px] py-[40px] md:py-[50px] lg:py-[100px]">
            <div className="dev-toolkit-heading pb-[40px] md:pb-[60px] text-[32px] md:text-[48px]">
                The Developer’s Toolkit
            </div>
            <div className="grid grid-cols-1 gap-[40px] md:grid-cols-3">
                <div className="flex flex-col gap-[10px]">
                    <div className="dev-toolkit-sub-heading">Languages</div>
                    <div className="dev-toolkit-desc">Typescript, Javascript, Python, solidity – you name it, I'm fluent</div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="dev-toolkit-sub-heading">Frameworks</div>
                    <div className="dev-toolkit-desc">Node.js, React.js, Next.js, Django, Laravel, Tailwind, Bootstap, Material UI – I'm the architect</div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="dev-toolkit-sub-heading">Databases</div>
                    <div className="dev-toolkit-desc">MySQL, PostgreSQL, MongoDB – I got it stored</div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="dev-toolkit-sub-heading">DevOps</div>
                    <div className="dev-toolkit-desc">GCP, AWS, Docker, Kubernetes – I got them deployed</div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="dev-toolkit-sub-heading">Version Control</div>
                    <div className="dev-toolkit-desc">Git, BitBucket – I got them committed</div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="dev-toolkit-sub-heading">Testing</div>
                    <div className="dev-toolkit-desc">Jest – I got them covered</div>
                </div>
            </div>
        </div>
    )
}

export default Skills