import { Card } from "./Card"

export const Blog = () => {
    return (
        <>
            <Card
                tags="27th April, 2023"
                title="First title"
                description="First description that is a little longer than the title but this a little more longer than our title but still meh not cool"
            />
            <Card 
                tags="28th March, 2023"
                title="Second title"
                description="Second description that is a little longer than the title"
            />
        </>
    );
}
