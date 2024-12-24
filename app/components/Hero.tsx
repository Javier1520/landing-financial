import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Expert Financial Guidance for Your Investment Journey
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Navigate the complex world of markets and cryptocurrencies with professional insights. Get personalized strategies to maximize your investment potential.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#contact"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Start Your Journey
              <ArrowRight className="ml-2 -mr-1 h-4 w-4 inline-block" />
            </Link>
            <Link href="#services" className="text-sm font-semibold leading-6 text-gray-900">
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24">
          <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <TrendingUp className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                Market Analysis
              </dt>
              <dd className="inline">Expert insights on market trends and investment opportunities.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <Shield className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                Risk Management
              </dt>
              <dd className="inline">Comprehensive strategies to protect and grow your investments.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <Award className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                Professional Expertise
              </dt>
              <dd className="inline">Years of experience in traditional and crypto markets.</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}