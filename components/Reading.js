import Image from "next/image";
import SubHeader from "./SubHeader";

export default function Reading() {
  const books = [
    {
      title: "The Diary of a CEO",
      author: "Steven Bartlett",
      image: "https://m.media-amazon.com/images/I/41gJOF1uHeL._SL500_.jpg",
      link: "https://www.audible.co.uk/pd/The-Diary-of-a-CEO-Audiobook/B0C4F9WGP5",
      quote:
        "Stop telling yourself you're not qualified, good enough or worthy. Growth happens when you start doing the things you're not qualified to do.",
    },
    {
      title: "Stolen Focus",
      author: "Johann Hari",
      image: "https://m.media-amazon.com/images/I/41ak5M8ILCL._SL500_.jpg",
      link: "https://www.audible.co.uk/pd/Stolen-Focus-Audiobook/B09NCDYRS2",
      quote:
        "We live in a culture that is constantly amping us up with stress and stimulation.",
    },
    {
      title: "Surrounded by Idiots",
      author: "Thomas Erikson",
      image: "https://m.media-amazon.com/images/I/41y1BUglJeL._SL500_.jpg",
      link: "https://www.audible.co.uk/pd/Surrounded-by-Idiots-Audiobook/1473569338",
      quote:
        "No matter what you learn about yourself and others, take notes, underline things, and engage with the material.",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andy Hunt and Dave Thomas",
      image: "https://m.media-amazon.com/images/I/51A8l+FxFNL._SL500_.jpg",
      link: "https://www.audible.co.uk/pd/The-Pragmatic-Programmer-20th-Anniversary-Edition-2nd-Edition-Audiobook/B0833F7G72",
      quote:
        "Every day, work to refine the skills you have and to add new tools to your repertoire.",
    },
    {
      title: "The Devops Handbook",
      author: "Gene Kim",
      image: "https://m.media-amazon.com/images/I/51-LRjBPDxL._SL500_.jpg",
      link: "https://www.audible.co.uk/pd/The-DevOps-Handbook-Second-Edition-Audiobook/B09L566FFW",
      quote:
        "When we asked for permission, we were told no, but we did it anyway, because we knew we needed it.",
    },
    {
      title: "The Unicorn Project",
      author: "Gene Kim",
      image: "https://m.media-amazon.com/images/I/51+3lvlXNuL._SL500_.jpg",
      link: "https://www.audible.co.uk/pd/The-Unicorn-Project-Audiobook/B08129SJ41",
      quote:
        "It is ignorance that is the mother of all problems, and the only thing that can overcome it is learning.",
    },
    {
      title: "The Phoenix Project",
      author: "Gene Kim",
      image: "https://m.media-amazon.com/images/I/51Fi5Fq4u5L._SL500_.jpg",
      link: "https://www.audible.co.uk/pd/The-Phoenix-Project-Audiobook/B00VB034GK",
      quote:
        "Any improvements made anywhere besides the bottleneck are an illusion.",
    },
  ];
  return (
    <section className="p-10 md:p-16 xl:p-24">
      <SubHeader>Favourite Reads</SubHeader>
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="grid lg:grid-cols-2 gap-5">
          {books.map((book, bookIndex) => {
            return (
              <div
                key={bookIndex}
                className="p-5 bg-stone-100 shadow-md grid md:grid-cols-2 gap-3"
              >
                <div className="">
                  <Image
                    src={book.image}
                    href={book.image}
                    alt={book.title}
                    width="200"
                    height="200"
                    className="object-contain min-h-full mx-auto lg:ml-0 lg:mr-auto w-auto h-auto"
                  />
                </div>
                <div className="flex-shrink">
                  <h3 className="font-josefin text-xl">{book.title}</h3>
                  <p className="text-sm">{book.author}</p>
                  <p className="text-stone-500 italic mt-8 text-sm">
                    &quot;{book.quote}&quot;
                  </p>
                  <p className="mt-8">
                    <a
                      className="inline-block font-semibold"
                      href={book.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Book
                      <svg
                        className="h-4 w-4 -mt-1 inline-block ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
