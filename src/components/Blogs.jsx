import React from "react";

const blogs = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "The Joy of Gardening",
    description: "Discover the therapeutic effects of tending to your garden.",
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "10 Tips for Healthy Eating",
    description: "Transform your eating habits with these simple tips.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D",
    title: "Exploring the Outdoors",
    description: "Find out the best trails for hiking and outdoor activities.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsb2d8ZW58MHx8MHx8fDA%3D",
    title: "Mastering Productivity",
    description: "Learn how to make the most of your time every day.",
  },
  {
    id: 5,
    image: "https://plus.unsplash.com/premium_photo-1683211783920-8c66ab120c09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D",
    title: "The Future of Technology",
    description: "Explore the latest trends in AI and robotics.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "The Future of AI",
    description: "Explore the latest trends in AI and robotics.",
  },
];

const BlogsAndArticles = () => {
  return (
    <div className="p-6 bg-blue-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Blogs & Articles</h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-red-400 hover:bg-teal-400 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-white">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsAndArticles;
