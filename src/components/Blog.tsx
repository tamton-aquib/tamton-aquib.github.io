import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card"
import Markdown from "react-markdown";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./styles/Blog.css";

export const Blog = () => {
    const params = useParams();
    const id = params.id;

    const [selectedBlog, setSelectedBlog] = useState<string | null>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("id: ", id)
                const response = await fetch(`/markdown/${id}.md`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch file: ${response.status}`);
                }
                const content = await response.text();
                console.log("Set content: ", content)
                setSelectedBlog(content);
            } catch (error) {
                console.error("Error fetching file:", error);
            }
        };

        if (id) {
            fetchData();
        } else {
            setSelectedBlog(null);
        }
    }, [id])

    return (
        <>
            {
                selectedBlog ?
                    <Markdown
                        className="blog-markdown"
                        components={{
                            code(props) {
                                const {children, className, node, ...rest} = props
                                const match = /language-(\w+)/.exec(className || '')
                                return match ? (
                                    <SyntaxHighlighter
                                        // {/* ...rest */}
                                        PreTag="div"
                                        children={String(children).replace(/\n$/, '')}
                                        language={match[1]}
                                        style={docco}
                                    />
                                ) : (
                                        <code {...rest} className={className}>
                                            {children}
                                        </code>
                                    )
                            }
                        }}
                    >
                        {selectedBlog}
                    </Markdown>
                    :
                    <>
                        <Card
                            tags="27th April, 2023"
                            title="First title"
                            description="Some descriptive description"
                            link="first-title"
                        />
                        <Card 
                            tags="28th March, 2023"
                            title="Second title"
                            description="Second description that is a little longer than the title"
                            link="second-title"
                        />
                    </>
            }
        </>
    );
}
