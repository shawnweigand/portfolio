import { useState } from "react";

interface Article {
    title: string
    link: string
    pubDate: string
}

interface Props {
    articles: Article[]
}

export default function ArticlesCarousel({ articles }: Props) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextArticle = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    };

    const prevArticle = () => {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + articles.length) % articles.length
      );
    };

    return (
        <div className="relative w-full overflow-hidden">
        <div className="mx-16 flex transition-transform duration-300 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * (100/3)}%)` }}>
          {articles.map((article, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 p-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-700">{article.pubDate}</p>
                <a target="_blank" href={article.link} className="text-blue-500 hover:underline mt-4 block">Read more</a>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevArticle}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={nextArticle}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          &#10095;
        </button>
      </div>
    )

}
