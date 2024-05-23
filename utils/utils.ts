import { readFileSync, readdirSync } from "fs";
import matter, { GrayMatterFile } from "gray-matter";

type BlogMetaData = {
	title: string,
	description: string,
	createdDate: Date,
	slug: string,
}

export const getBlogContent = (slug: string) =>  matter(readFileSync(`blog/${slug}.md`, 'utf8')) ;

export const getBlogMetadata = (basePath: string): BlogMetaData[] => {
	const files = readdirSync(basePath + '/').filter((f) => f.endsWith('.md'))

	const blogs: BlogMetaData[] = files.map(f => {
		const content = readFileSync(`${basePath}/${f}`, 'utf8');
		const m: GrayMatterFile<string> = matter(content);

		return {
			title: m.data.title,
			description: m.data.description,
			createdDate: m.data['created-date'],
			slug: f.replace('.md', '')
		}
	})

	return blogs;
}
