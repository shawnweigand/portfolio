interface Skill {
    name: string
    color: string
    skills: string[]
}

interface Props {
    articles: []
}

interface Article {
    title: string
    link: string
    pubDate: string
}

export default function Articles({ articles }: Props) {

    return (
          <section id="articles" className="py-20 px-4 md:px-16 bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Articles</h2>
              {articles.map((article: Article, index) => (
                        <div key={index} className={`text-white bg-red-600 rounded-full px-4 py-2 mx-1 mb-2`}>{article.title}</div>
            ))}
            </div>
          </section>
    )
}
