function Footer() {
  return (
    <div className="grid place-items-center px-[20px] md:px-[50px] lg:px-[100px] pb-[20px] md:pb-[80px] lg:pb-[100px]">
      <img className="h-40 w-40" src="/footer.png" alt="" loading="lazy" />
      <div className="text-center">&copy; {new Date().getFullYear()} Yogesh Kumar, Developer Extraordinaire</div>
    </div>
  )
}

export default Footer