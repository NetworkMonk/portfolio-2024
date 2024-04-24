"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import SubHeader from "./SubHeader";

export default function Achievements() {
  const faqs = [
    {
      question: "Building a Development Team",
      answers: [
        "Tasked with building a development team from scratch, including designing all deployment and development processes, has been a thoroughly enjoyable challenge.",
        "I'm very happy with the team and culture behind the team. I love working with people and seeing my team grow and mature is incredibly satisfying.",
      ],
    },
    {
      question: "Magento E-Commerce Website Launch",
      answers: [
        "Inheriting ownership over an E-Commerce website project was daunting. With support from the E-Commerce manager we managed to get the website launched successfully and to an acceptable standard.",
      ],
    },
    {
      question: "Launching Shopify Website",
      answers: [
        "A personal experiment to get experience with other E-Commerce platforms. I dedicated some time to launch a fully functional and transaction Shopify store.",
        "You can see this in my portfolio and this site continues to be developed and maintained.",
      ],
    },
    {
      question: "Storage Solution in Go",
      answers: [
        "Tasked with building a bespoke storage service that could run on custom hosted infrastructure.",
        "With the requirements being a high level of security and to maximise physical storage available. I used a combination of customer level AES-256-CBC encryption at rest, block level storage and data de-duplication.",
        "The resulting application, that was built entirely in Go, was an incredibly secure and performant online storage solution.",
      ],
    },
    {
      question: "Hosted Server Infrastructure",
      answers: [
        "I was asked to explore the possibility of creating a bespoke cloud hosting environment that could be both inexpensive and accessible for smaller scale companies and profitable for my business.",
        "The resulting infrastructure was planned out meticulously and implemented successfully. Providing many customers with terminal servers, web servers and hosted email services.",
      ],
    },
  ];

  return (
    <section className="p-10 md:p-16 xl:p-24">
      <SubHeader>Achievements</SubHeader>
      <div className="mx-auto max-w-7xl lg:px-8">
        <dl className="space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-lg font-josefin font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <ChevronDownIcon className="inline-block h-4 w-4 -mt-2" />
                        ) : (
                          <ChevronUpIcon className="inline-block h-4 w-4 -mt-2" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12 py-8">
                    {faq.answers.map((answer, answerIndex) => {
                      return (
                        <p
                          key={answerIndex}
                          className="text-base leading-7 text-gray-600 my-1"
                        >
                          {answer}
                        </p>
                      );
                    })}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
}
