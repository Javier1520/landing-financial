import React from "react";
import {
  LineChart,
  Wallet,
  TrendingUp,
  Shield,
  BookOpen,
  Users,
} from "lucide-react";
import { Service } from "../types";

const services: Service[] = [
  {
    name: "Market Analysis",
    description:
      "In-depth analysis of market trends, opportunities, and potential risks in both traditional and crypto markets.",
    icon: LineChart,
  },
  {
    name: "Portfolio Management",
    description:
      "Personalized portfolio strategies tailored to your risk tolerance and investment goals.",
    icon: Wallet,
  },
  {
    name: "Trading Strategies",
    description:
      "Development of custom trading strategies for different market conditions and asset classes.",
    icon: TrendingUp,
  },
  {
    name: "Risk Management",
    description:
      "Comprehensive risk assessment and management strategies to protect your investments.",
    icon: Shield,
  },
  {
    name: "Educational Resources",
    description:
      "Access to educational materials and workshops to enhance your investment knowledge.",
    icon: BookOpen,
  },
  {
    name: "One-on-One Consultation",
    description:
      "Personal consultation sessions to discuss your specific investment needs and goals.",
    icon: Users,
  },
];

export default function Services(): React.ReactNode {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Financial Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a wide range of financial services designed to help you
            succeed in both traditional and cryptocurrency markets.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <div className="flex items-center gap-x-3">
                  <service.icon
                    className="h-7 w-7 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="flex-auto text-xl font-semibold leading-7 text-gray-900">
                    {service.name}
                  </h3>
                </div>
                <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a
                      href="#contact"
                      className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="relative isolate overflow-hidden bg-blue-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Investment Strategy?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Get started with our expert financial advisory services today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
