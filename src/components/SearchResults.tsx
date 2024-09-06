"use client";

import React, { useMemo } from "react";
import { News } from "../models/News";

interface SearchResultsProps {
  data: News[];
  query: string;
}

const highlightText = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="bg-yellow-300">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const countOccurrences = (text: string, query: string): number => {
  if (!query) return 0;
  const regex = new RegExp(query, "gi");
  return (text.match(regex) || []).length;
};

const SearchResults: React.FC<SearchResultsProps> = ({ data, query }) => {
  const totalOccurrences = useMemo(() => {
    return data.reduce((acc, news) => {
      const { title, description } = news;
      return (
        acc +
        countOccurrences(title, query) +
        countOccurrences(description, query)
      );
    }, 0);
  }, [data, query]);
  // If no results, display "No Results Found" centered on the screen
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-2xl text-gray-600">No results found</p>
      </div>
    );
  }
  return (
    <div>
      <div className="my-4">Total Search Result: {totalOccurrences}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((news) => (
          <div key={news.id} className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold font-sans">
              {highlightText(news.title, query)}
            </h2>
            <p className="text-sm text-gray-700 font-serif">
              {news.author} | {news.date}
            </p>
            <p className="text-[12px] bg-gray-400 max-w-max rounded-2xl py-1 px-2 my-2">
              {news.category}
            </p>
            <p className="mt-2">{highlightText(news.description, query)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
