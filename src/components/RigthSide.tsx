"use client";

import React from "react";
import { FaReact, FaCss3Alt, FaKhanda } from "react-icons/fa"; // Icons for tools
import { SiTypescript, SiNextdotjs } from "react-icons/si"; // More icons

export default function RightSide() {
  return (
    <div className="w-60 flex-shrink-0 py-6 px-4 bg-gray-50 shadow-md rounded-lg">
      {/* Project Overview */}
      <div className="flex flex-col items-center mb-6">
        <FaReact className="text-6xl text-blue-500 mb-2 animate-spin-slow" />
        <h2 className="text-xl font-semibold text-gray-800">Search Project</h2>
        <p className="text-sm text-gray-500">
          Using React, Next.js, and TypeScript
        </p>
      </div>

      {/* Project Stack Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Technologies Used
        </h3>

        {/* React Section */}
        <div className="flex items-center mb-4">
          <FaReact className="text-2xl text-blue-500 mr-3 " />
          <div>
            <h4 className="font-semibold text-gray-800">React</h4>
            <p className="text-sm text-gray-600">
              A JavaScript library for building dynamic UIs.
            </p>
          </div>
        </div>

        {/* Next.js Section */}
        <div className="flex items-center mb-4">
          <SiNextdotjs className="text-2xl text-black mr-3" />
          <div>
            <h4 className="font-semibold text-gray-800">Next.js</h4>
            <p className="text-sm text-gray-600">
              A React framework for building server-side rendered apps.
            </p>
          </div>
        </div>

        {/* TypeScript Section */}
        <div className="flex items-center mb-4">
          <SiTypescript className="text-2xl text-blue-600 mr-3" />
          <div>
            <h4 className="font-semibold text-gray-800">TypeScript</h4>
            <p className="text-sm text-gray-600">
              A typed superset of JavaScript that improves code quality.
            </p>
          </div>
        </div>

        {/* Faker.js Section */}
        <div className="flex items-center mb-4">
          <FaKhanda className="text-2xl text-green-600 mr-3" />
          <div>
            <h4 className="font-semibold text-gray-800">Faker.js</h4>
            <p className="text-sm text-gray-600">
              A library for generating fake data for testing.
            </p>
          </div>
        </div>

        {/* Tailwind CSS Section */}
        <div className="flex items-center">
          <FaCss3Alt className="text-2xl text-blue-600 mr-3" />
          <div>
            <h4 className="font-semibold text-gray-800">Tailwind CSS</h4>
            <p className="text-sm text-gray-600">
              A utility-first CSS framework for designing responsive layouts.
            </p>
          </div>
        </div>
      </div>

      {/* Settings Section */}
    </div>
  );
}
