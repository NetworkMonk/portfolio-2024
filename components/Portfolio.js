import Image from "next/image";
import SubHeader from "./SubHeader";
import SubHeader3 from "./SubHeader3";

export default function Portfolio() {
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
    },
    {
      title: "1st Leyton Scouts",
      image: "/img/1stleytonscouts.png",
      url: "https://1stleytonscouts.co.uk/",
      description: [
        "I spent some time with 1st Leyton Scouts to help them complete their website. They already had a WordPress installation and needed help completing the site to a reasonable level.",
      ],
      tags: ["WordPress", "Design", "UI/UX"],
    },
  ];

  return (
    <section className="p-10 md:p-16 xl:p-24 bg-white">
      <SubHeader>Portfolio</SubHeader>
      <div className="grid xl:grid-cols-2 gap-10">
        {sites.map((site, siteIndex) => {
          return (
            <div
              key={siteIndex}
              className="text-brand-black p-8 bg-stone-100 shadow-md"
            >
              <SubHeader3>{site.title}</SubHeader3>
              <Image
                src={site.image}
                alt={site.title}
                width="800"
                height="600"
                className="mx-auto"
              />
              <div className="pt-10 pb-5">
                {site.description.map((description, index) => {
                  return (
                    <p className="my-5" key={index}>
                      {description}
                    </p>
                  );
                })}
              </div>
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
              <div className="mt-5">
                <a
                  className="fill-black font-semibold text-xl"
                  href={site.url}
                  target="_blank"
                  title={site.title}
                >
                  View Site
                  <svg
                    className="h-5 w-5 -mt-1 inline-block ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pt-28 lg:-mb-24 mx-24">
        <div className="border-b"></div>
      </div>
    </section>
  );
}
