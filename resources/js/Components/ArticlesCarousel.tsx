import { useEffect, useState } from "react";

interface Article {
    title: string
    link: string
    pubDate: string
    image: string
    description: string
}

interface Props {
    articles: Article[]
}

export default function ArticlesCarousel({ articles }: Props) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const nextArticle = () => {
        setCurrentIndex(currentIndex == articles.length - 1 ? currentIndex : currentIndex + 1);
      };

    const prevArticle = () => {
    setCurrentIndex(currentIndex == 0 ? currentIndex : currentIndex - 1);
    };

    // Set isMobile based on screen width
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // `md` breakpoint in Tailwind
      };

      // Run on initial load
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
        <div className="mx-16 flex transition-transform duration-300 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 100 / 3)}%)` }}>
          {articles.map((article, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 p-4">
                <div className="shadow-md h-full flex flex-col rounded-lg">
                    <a href={article.link} target="_blank"><img className="w-full h-64 object-cover rounded-t-lg" src={article.image} alt={article.title} /></a>
                    <div className="bg-white rounded-b-lg p-6 flex-grow flex flex-col justify-between">
                        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                        <p className="text-gray-700">{article.pubDate}</p>
                        <p className="pt-4">{article.description}</p>
                        <a target="_blank" href={article.link} className="text-blue-500 hover:underline mt-4 block">Read more</a>
                    </div>
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
