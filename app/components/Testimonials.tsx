import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Retail Investor",
    content:
      "The market insights and personalized strategy helped me achieve a 25% return on my cryptocurrency investments. Highly recommended!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "Their expertise in both traditional markets and crypto has been invaluable. The educational resources are top-notch.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emma Davis",
    role: "Professional Trader",
    content:
      "The risk management strategies they provided helped me navigate the volatile crypto market with confidence.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Investors Worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl"
              >
                <div>
                  <div className="flex items-center gap-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 flex-none text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="mt-6 text-lg leading-7 text-gray-600">
                    &quot;{testimonial.content}&quot;
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="rounded-full bg-gray-50"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm leading-6 text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Join Our Growing Community
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Experience the difference expert financial guidance can make in your
            investment journey.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
