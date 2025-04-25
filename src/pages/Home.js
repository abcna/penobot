import React from "react";
import { Link } from "react-router-dom";
import {
  ChatBubbleLeftRightIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  const features = [
    {
      name: "AI Technical Assistant",
      description:
        "Get instant answers to your technical questions about pneumatics from our AI-powered assistant.",
      icon: ChatBubbleLeftRightIcon,
      href: "/ai-assistant",
    },
    {
      name: "Marketplace",
      description:
        "Browse and purchase a wide range of pneumatic parts and components from trusted suppliers.",
      icon: ShoppingCartIcon,
      href: "/marketplace",
    },
    {
      name: "Store Directory",
      description:
        "Find and connect with pneumatic stores and suppliers in your area.",
      icon: BuildingStorefrontIcon,
      href: "/stores",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-primary-600">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to PenoPlatform
          </h1>
          <p className="mt-6 text-xl text-primary-100 max-w-3xl">
            Your comprehensive platform for all things pneumatics. Get technical
            support, find parts, and connect with suppliers.
          </p>
        </div>
      </div>

      {/* Features section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for pneumatics
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                    <Link
                      to={feature.href}
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-primary-600">
              Join our platform today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Browse Marketplace
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/ai-assistant"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
              >
                Ask AI Assistant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
