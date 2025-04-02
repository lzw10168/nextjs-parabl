import React from "react";
import Link from "next/link";

export default function BlogPage() {
  // 模拟博客文章数据
  const blogPosts = [
    {
      id: 1,
      title: "How to Maximize Your Productivity with Our Tools",
      excerpt: "Discover the best practices for utilizing our suite of productivity tools to streamline your workflow and boost efficiency.",
      date: "June 15, 2023",
      author: "Alex Johnson",
      category: "Productivity",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Digital Transformation",
      excerpt: "Explore the emerging trends in digital transformation and how they are reshaping businesses across industries.",
      date: "May 28, 2023",
      author: "Sarah Wilson",
      category: "Technology",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Understanding the Impact of AI on Modern Business",
      excerpt: "An in-depth look at how artificial intelligence is revolutionizing business operations and decision-making processes.",
      date: "April 12, 2023",
      author: "Michael Brown",
      category: "AI & Machine Learning",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "5 Key Strategies for Effective Team Collaboration",
      excerpt: "Learn the essential strategies that can help your team collaborate more effectively and achieve better results.",
      date: "March 5, 2023",
      author: "Emily Chen",
      category: "Team Management",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Securing Your Digital Assets: A Comprehensive Guide",
      excerpt: "A detailed guide on protecting your valuable digital assets from cyber threats and ensuring data security.",
      date: "February 20, 2023",
      author: "David Miller",
      category: "Security",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="container mx-auto px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Our Blog
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Insights, tips, and news from our team of experts to help you get the most out of our products and services.
      </p>
      
      <div className="max-w-5xl mx-auto">
        {blogPosts.map((post) => (
          <div key={post.id} className="mb-12 p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex flex-wrap items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="mr-4">{post.date}</span>
              <span className="mr-4">•</span>
              <span className="mr-4">{post.category}</span>
              <span className="mr-4">•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
              <Link href={`/blog/${post.id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                By {post.author}
              </div>
              <Link href={`/blog/${post.id}`} className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
} 
