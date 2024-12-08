import ArticlesCarousel from "@/Components/ArticlesCarousel"

interface Props {
    articles: Article[]
}

interface Article {
    title: string
    link: string
    pubDate: string
    image: string
    description: string
}

export default function Articles({ articles }: Props) {

    return (
          <section id="articles" className="py-20 px-4 md:px-16">
            <h2 className="text-[#2e250a] text-3xl font-bold text-center mb-8">My Articles</h2>
            <ArticlesCarousel articles={articles}></ArticlesCarousel>
          </section>
    )
}
