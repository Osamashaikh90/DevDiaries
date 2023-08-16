import getFormatDate from "../../../../lib/getFormatDate"
import { getSortedPostsData, getPostData } from "../../../../lib/post"
import { notFound } from "next/navigation"
import Link from "next/link"

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post:any) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find((post:any) => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find((post:any) => post.id === postId)) notFound()

    const {date, title, contentHtml } = await getPostData(postId)

    const pubDate = getFormatDate(date)

    return (
        <main className="prose prose-xl prose-slate dark:prose-invert  mx-auto  bg-white/30 backdrop-blur-md shadow-xl rounded-3xl h-auto lg:w-[900px] md:w-[550px] xxsm:w-[360px] px-10 pt-16 pb-10">
            <h1 className="mt-4 mb-0 text-3xl">{title}</h1>
            <h1>Published on: {date}</h1>
            <p className="mt-0">
                {pubDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p className="bg-white/30 backdrop-blur-md shadow-xl rounded-3xl p-2 w-[200px] font-semibold flex items-center justify-center mt-5">
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    )
}