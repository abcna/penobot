import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const StoreDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");

  // Mock data - replace with actual API data later
  const cities = [
    { id: "all", name: "All Cities" },
    { id: "tehran", name: "Tehran" },
    { id: "mashhad", name: "Mashhad" },
    { id: "isfahan", name: "Isfahan" },
    { id: "shiraz", name: "Shiraz" },
  ];

  const stores = [
    {
      id: 1,
      name: "Pneumatic Solutions Co.",
      city: "tehran",
      address: "No. 123, Valiasr St., Tehran",
      phone: "+98 21 1234 5678",
      email: "info@pneumaticsolutions.com",
      description: "Specialized in industrial pneumatic components and systems",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "AirTech Systems",
      city: "mashhad",
      address: "No. 456, Imam Reza Blvd., Mashhad",
      phone: "+98 51 2345 6789",
      email: "contact@airtech.com",
      description: "Leading provider of pneumatic automation solutions",
      image: "https://via.placeholder.com/150",
    },
    // Add more mock stores as needed
  ];

  const filteredStores = stores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === "all" || store.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
          Store Directory
        </h1>
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stores..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="w-full md:w-64">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Filter by City
            </h2>
            <div className="space-y-2">
              {cities.map((city) => (
                <label key={city.id} className="flex items-center">
                  <input
                    type="radio"
                    name="city"
                    value={city.id}
                    checked={selectedCity === city.id}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    {city.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Store listings */}
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-gray-900">
                        {store.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {store.description}
                      </p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                          {store.address}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                          {store.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
                          {store.email}
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
                          Contact Store
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDirectory;
