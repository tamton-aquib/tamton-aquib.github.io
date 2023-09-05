import { Card } from "./Card"

export const Blog = () => {
    return (
        <>
            <Card
                tags="27th April, 2023"
                title="First title"
                description="Some descriptive description"
            />
            <Card 
                tags="28th March, 2023"
                title="Second title"
                description="Second description that is a little longer than the title"
            />
        </>
    );
}
