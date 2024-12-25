"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FormData } from "../types";

const initialFormState: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact(): React.ReactNode {
  const [formData, setFormData] = useState<FormData>(initialFormState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData(initialFormState);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative isolate bg-white py-24 px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
          Contact Us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
          Get in touch with our expert team for personalized financial guidance.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
            <p className="mt-4 text-gray-600">
              Have questions about our services? We&apos;re here to help.
              Contact us through any of these channels.
            </p>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-x-4">
                <dt>
                  <Mail className="h-7 w-6 text-blue-600" aria-hidden="true" />
                </dt>
                <dd>
                  <p className="text-sm font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:contact@finadvisor.com"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    contact@finadvisor.com
                  </a>
                </dd>
              </div>

              <div className="flex gap-x-4">
                <dt>
                  <Phone className="h-7 w-6 text-blue-600" aria-hidden="true" />
                </dt>
                <dd>
                  <p className="text-sm font-semibold text-gray-900">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    +1 (234) 567-890
                  </a>
                </dd>
              </div>

              <div className="flex gap-x-4">
                <dt>
                  <MapPin
                    className="h-7 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <p className="text-sm font-semibold text-gray-900">Office</p>
                  <p className="text-gray-600">
                    123 Financial District
                    <br />
                    New York, NY 10004
                    <br />
                    United States
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
