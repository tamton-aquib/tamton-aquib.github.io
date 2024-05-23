import { getBlogContent, getBlogMetadata } from "@/utils/utils";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => getBlogMetadata('blog').map(p => ({ slug: p.slug.replace('.md', '') }));

type Props = { params: { slug: string } }

export const generateMetadata = ({ params }: Props) => {
	const id = params?.slug ? ('My Blog · ' + params.slug) : '';

	return {
		title: `${id.replaceAll('_', '')}`
	}
}

const BlogPage = ({ params }: Props) => {
	const slug = params.slug;
	const m = getBlogContent(slug);

	return (
		<main className="ml-[15%] mr-[15%]">
			<Markdown>{m.content}</Markdown>
		</main>
	);
}

export default BlogPage;
