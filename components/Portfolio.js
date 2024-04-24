import Image from "next/image";
import SubHeader from "./SubHeader";
import SubHeader3 from "./SubHeader3";

export default function Portfolio2() {
  const sites = [
    {
      title: "Profile 2024",
      image: "/img/profile_2024.png",
      url: "https://jamesplant.me",
      description: [
        "This site! Key objectives for this build was to build a site in a short amount of time that can be used to create some training videos online.",
        "Keep it lightweight and fast and celebrate some of my recent achievements.",
      ],
      tags: ["Profile", "UI/UX", "Lightweight", "React", "Next.js", "Tailwind"],
      requirements: [
        "Fast turnaround.",
        "Strong UI/UX.",
        "Animated page elements when scrolled into view.",
        "Social links.",
        "Portfolio.",
        "Reading list.",
      ],
    },
    {
      title: "James Plant Photography",
      image: "/img/jamesplantphotography.png",
      url: "https://jamesplantphotography.co.uk",
      description: [
        "A big pet project of mine is photography. Many families have trusted me to record some very special occasions. This site was built to celebrate my love for photography.",
        "I really want an animated website with primary focus on the images with minimal text or other content.",
      ],
      tags: ["Profile", "UI/UX", "Animations", "React", "Next.js", "Tailwind"],
      requirements: [
        "Concentrate on the imagery for the website, less text, more focus on photos.",
        "Page animations and component animations.",
        "Image gallery.",
        "Social links.",
        "Small about section.",
      ],
    },
    {
      title: "Coder Cave",
      image: "/img/codercave.png",
      url: "https://codercave.net",
      description: [
        "In an effort to learn more about E-Commerce and specifically the shopify platform, I created and launched this fully functional store.",
        "Coder Cave sells clothes and accessories to celebrate everyone's love for coding and software development",
      ],
      tags: ["Shopify", "E-Commerce", "Design", "UI/UX"],
      requirements: [
        "E-Commerce website built on Shopify.",
        "No stock holding, use print on demand services.",
        "Aimed at coders, use fonts and colour themes associated with IDEs.",
        "Launch with ~50 products.",
        "Product design in Canva.",
      ],
    },
    {
      title: "1st Leyton Scouts",
      image: "/img/1stleytonscouts.png",
      url: "https://1stleytonscouts.co.uk/",
      description: [
        "I spent some time with 1st Leyton Scouts to help them complete their website. They already had a WordPress installation and needed help completing the site to a reasonable level.",
      ],
      tags: ["WordPress", "Design", "UI/UX"],
      requirements: [
        "User needs to be able to update content.",
        "Follow provided Scout brand guidelines.",
        "Use provided imagery.",
        "Aid in creating all content pages.",
      ],
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="px-10 pb-10">
        <SubHeader>Portfolio</SubHeader>
      </div>
      <div className="grid gap-16">
        {sites.map((site, siteIndex) => {
          return (
            <div
              key={siteIndex}
              className="text-brand-black px-8 py-12 bg-stone-100 shadow grid lg:grid-cols-2 gap-10"
            >
              <div className="">
                <Image
                  src={site.image}
                  alt={site.title}
                  width="1024"
                  height="768"
                  className="mx-auto w-auto h-auto"
                />
              </div>
              <div className="">
                <SubHeader3>{site.title}</SubHeader3>
                <p>
                  <a
                    className="fill-black font-semibold"
                    href={site.url}
                    target="_blank"
                    title={site.title}
                  >
                    {site.url}
                    <svg
                      className="h-3 w-3 -mt-0.5 inline-block ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                    </svg>
                  </a>
                </p>
                <div className="my-5">
                  <p className="font-semibold">Requirements</p>
                  <ul className="list-disc list-inside leading-10 text-sm text-gray-600 my-5">
                    {site.requirements.map((requirement, rIndex) => {
                      return <li key={rIndex}>{requirement}</li>;
                    })}
                  </ul>
                </div>
                <div className="my-10">
                  {site.description.map((description, index) => {
                    return (
                      <p className="my-5" key={index}>
                        {description}
                      </p>
                    );
                  })}
                </div>
                <div className="mt-12">
                  {site.tags.map((tag, tagIndex) => {
                    return (
                      <p
                        key={tagIndex}
                        className="inline-block mr-3 mb-2 rounded-full px-5 py-3 text-sm font-semibold bg-brand-background text-white"
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
