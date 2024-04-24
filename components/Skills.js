"use client";

import SubHeader from "./SubHeader";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS",
    "PHP",
    "JavaScript",
    "tailwindcss",
    "Laravel",
    "Next.js",
    "Bootstrap",
    "WordPress",
    "Node.js",
    "Electron",
    "SuiteScript",
    "Go",
    "Unity",
    "C#",
    "C++",
    "CI/CD",
    "Linux",
    "MySQL",
    "Shopify",
    "Magento",
    "Server Administration",
    "Troubleshooting",
    "Support Help Desk Management",
    "Microsoft Azure",
    "Microsoft Exchange",
  ];
  return (
    <section className="p-10 md:p-16 xl:p-24 bg-brand-foreground">
      <SubHeader>Skills</SubHeader>
      <div className="mx-auto max-w-7xl lg:px-8">
        {skills.map((skill, skillIndex) => {
          return (
            <p
              className="inline-block border bg-brand-background border-brand-background text-white rounded-full py-2 px-4 mr-2 mb-2 text-lg"
              key={skillIndex}
            >
              {skill}
            </p>
          );
        })}
      </div>
      <div className="mx-auto max-w-7xl lg:px-8 my-20">
        <p className="italic text-2xl">
          Those who hoard gold have riches for a moment. Those who hoard
          knowledge and skills have riches for a lifetime. True prosperity is
          what you know and what you can do.
        </p>
        <p className="mt-4 text-stone-600">Steven Bartlett</p>
      </div>
    </section>
  );
}
