"use client";
import React, { ChangeEvent, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const [showClearIcon, setShowClearIcon] = useState(query.length > 0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setShowClearIcon(newQuery.length > 0);
  };

  const handleClear = () => {
    setQuery("");
    setShowClearIcon(false);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search news..."
        className="p-2 w-full border rounded-md pl-8 pr-10"
      />
      {showClearIcon && (
        <button
          onClick={handleClear}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
