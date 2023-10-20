// Define the Generic Mapper interface that will be implemented by PostMapper
interface Mapper<TSource, TOutpout> {
    map(source: TSource): TOutpout;
}

// Define the interfaces for ApiResponse, ApiResponseMetadata, and Post
interface ApiResponseMetadata {
    [key: string]: string | number | boolean;
}

interface ApiResponse {
    id: number;
    title: string;
    content: string;
    metadata?: ApiResponseMetadata;
}

interface Post {
    id: number;
    title: string;
    content: string;
    isFeatured: boolean;
}

// Create a class PostMapper that implements the Mapper interface
class PostMapper implements Mapper<ApiResponse, Post> {
    // Implement the map method to convert ApiResponse to Post
    map(source: ApiResponse): Post {
        return {
            id: source.id,
            title: source.title,
            content: source.content,
            isFeatured: !!source?.metadata?.isFeatured
            // or use Boolean(source?.metadata?.isFeatured) if you prefer
        };
    }
}

// Example data in ApiResponse format
const apiResponse: ApiResponse = {
    id: 1,
    title: "Sample title",
    content: "Sample content.",
    metadata: {
        isFeatured: true
        // You can include other metadata properties here
    },
};

// Create an instance of the PostMapper
const postMapper = new PostMapper();
// Map the data from ApiResponse to Post
const post: Post = postMapper.map(apiResponse);

// Display the mapped Post
console.log("Mapped Post Object:");
console.log(post);
