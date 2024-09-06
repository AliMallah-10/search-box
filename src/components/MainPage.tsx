"use client";
import { useState, useMemo } from "react";
import { generateNewsData } from "../utils/dataGenerator";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { News } from "../models/News";
export default function MainPage() {
  const [query, setQuery] = useState("");

  // Use useMemo to generate mock data only once
  const newsData: News[] = useMemo(() => generateNewsData(), []);

  // Filter the news based on the search query
  const filteredData = useMemo(() => {
    return newsData.filter((news) =>
      [news.title, news.description].some((field) =>
        field.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [newsData, query]);

  return (
    <div className="mx-auto p-4 w-full">
      <h1 className="text-2xl font-bold text-center">News Search Box</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResults data={filteredData} query={query} />
    </div>
  );
}
