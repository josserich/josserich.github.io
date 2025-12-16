import { Hero, Linkedin, Tiktok, Whatsapp, Youtube } from "./../assets";

const Home = () => {
  const socialMedia = [
    { icon: Youtube, link: "https://www.youtube.com/@codewithjoee" },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/josse-dev/",
    },
    { icon: Tiktok, link: "https://www.tiktok.com/@jossepinem" },
    { icon: Whatsapp, link: "https://wa.link/2s7u5m" },
  ];
  return (
    <div className="pt-[110px] mb-12 p-5">
      <div className="sm:w-full lg:w-[1024px] lg:m-auto flex flex-wrap lg:flex-nowrap md:justify-center gap-12 items-center">
        <div>
          <div className="text-xl font-bold mb-3">
            Hello, I'm Josse Surya Pinem
          </div>
          <div className="text-3xl font-bold tracking-wide mb-3">
            I'm{" "}
            <span className="text-[#201ACA]">
              Software Engineer & Content Creator
            </span>
          </div>
          <div className="text-xl mb-6">
            Please take a look around. I am passionate about building excellent
            software (android, desktop, web) that improves the lives of those
            around me. I specialize in creating software for clients ranging
            from individuals and small-businesses all the way to large
            enterprise corporations. Not only that, I am passionate about
            teaching programming in youtube channel.
          </div>
          <div className="flex items-center gap-5 mb-6">
            {socialMedia.map((item, index) => (
              <img
                key={index}
                src={item.icon}
                alt={item.link}
                className={`${
                  index === 0 ? "w-[52px]" : "w-[40px]"
                } h-[40px] cursor-pointer hover:scale-110 hover:translate-y-[-15px] duration-300`}
                onClick={() => window.open(item.link, "_blank")}
              />
            ))}
          </div>
          <div onClick={() => window.open(socialMedia[3].link, "_blank")}>
            <button className="bg-[#3357F4] px-5 py-3 text-white font-black rounded-lg text-2xl tracking-widest cursor-pointer hover:scale-110 hover:translate-y-[-15px] duration-300">
              HIRE ME !{" "}
            </button>
          </div>
        </div>
        <img
          src={Hero}
          alt="josse-surya-pinem"
          className="w-[470px] h-auto rounded-3xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;
