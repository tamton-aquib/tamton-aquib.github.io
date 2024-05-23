import { getBlogMetadata } from "@/utils/utils";
import Link from "next/link";
import "./Blog.css";

const BlogList = () => {
	const blogs = getBlogMetadata("blog");

	return (
		<main>
			<div className="text-3xl flex justify-center mb-7 mt-7">Blog Posts</div>

			{blogs.map(blog => {
				return (
					<Link key={blog.slug} href={`blog/${blog.slug}`}>
						<div className="flex flex-col p-2.5 m-2 ml-[15%] mr-[15%] align-self-center blog-card">
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
