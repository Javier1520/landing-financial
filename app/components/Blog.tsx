import React from "react";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { BlogPost } from "../types";
import Image from "next/image";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Cryptocurrency Market Trends",
    description:
      "Learn about the latest trends in cryptocurrency markets and how they affect your investment strategy.",
    category: "Cryptocurrency",
    date: "Mar 16, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Essential Risk Management Strategies",
    description:
      "Discover key strategies to protect your investments and minimize risks in volatile markets.",
    category: "Investment Strategy",
    date: "Mar 15, 2024",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Building a Diversified Investment Portfolio",
    description:
      "Tips and strategies for creating a well-balanced investment portfolio across different asset classes.",
    category: "Portfolio Management",
    date: "Mar 14, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

const categories: string[] = [
  "Cryptocurrency",
  "Investment Strategy",
  "Market Analysis",
  "Portfolio Management",
  "Risk Management",
  "Financial Planning",
];

export default function Blog(): React.ReactNode {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Blog
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Insights & Market Analysis
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay informed with our latest articles on financial markets,
            investment strategies, and cryptocurrency trends.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Link
              key={category}
              href="#"
              className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
            >
              <Tag className="mr-1 inline-block h-4 w-4" />
              {category}
            </Link>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <div className="absolute inset-0 -z-10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  loading={post.id === 1 ? "eager" : "lazy"}
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="flex items-center gap-x-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="mx-2">·</div>
                  <div className="flex items-center gap-x-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
