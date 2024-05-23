import { getBlogMetadata } from "@/utils/utils";
import Link from "next/link";
import "./Blog.css";

const BlogList = () => {
	const blogs = getBlogMetadata("blog");

	const formatter = new Intl.DateTimeFormat('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	return (
		<main>
			<div className="text-3xl flex justify-center mb-7 mt-7">Blog Posts</div>

			{blogs.map(blog => {
				const formattedDate = formatter.format(blog.createdDate);
				return (
					<Link key={blog.slug} href={`blog/${blog.slug}`}>
						<div className="flex flex-col p-8 m-2 ml-[15%] mr-[15%] align-self-center blog-card">
							<div className="text-sm mb-2">{formattedDate}</div>
							<div className="text-xl font-bold">{blog.title}</div>
							<div className="text-sm">{blog.description}</div>
						</div>
					</Link>
				)
			})}
		</main>
	);
};

export default BlogList;
