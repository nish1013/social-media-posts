/**
 * TypeScript Example: Blog Post Management using Partial<Type>
 *
 * This example demonstrates using `Partial<Type>` in TypeScript for flexible blog post
 * creation and update operations in an application. The `Partial<Type>` utility allows
 * partial modifications of an object's properties during updates, enhancing efficiency and
 * flexibility in data management.
 */

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt?: Date;
  tags?: string[];
}

/**
 * Creates a new blog post.
 *
 * @param newPost - An object representing a new blog post, containing all required properties.
 */
function createBlogPost(newPost: BlogPost): void {
  // Simulate storing the new blog post in the database
  console.log('Creating new post:', newPost);
}

/**
 * Updates an existing blog post with partial data.
 * Partial<BlogPost> allows updates with any subset of BlogPost properties.
 *
 * @param postId - The unique identifier of the blog post to be updated.
 * @param postUpdate - An object containing any subset of the BlogPost properties that require updating.
 */
function updateBlogPost(postId: string, postUpdate: Partial<BlogPost>): void {
  // Simulate updating specific fields of the blog post in the database
  console.log(`Updating post ${postId}:`, postUpdate);
}

// Example usage demonstrating the creation and update of a blog post
const newPost: BlogPost = {
  id: '124',
  title: 'New TypeScript Features',
  content: "Let's explore the latest TypeScript features...",
  author: 'Jane Doe',
  createdAt: new Date(),
};

createBlogPost(newPost); // Creating a new blog post
updateBlogPost('124', { title: 'Updated TypeScript Features' }); // Partially updating the created post
