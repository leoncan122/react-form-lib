import React from "react";
import './SearchBar.css'

export interface SearchBarProps {
  searchFunction?: Function;
  searchIcon?: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchFunction, searchIcon }) => {
  return (

        <div className="search-container">
          <label
            htmlFor="default-search"
            className="search-label mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="search-input-container">
            <input
              type="search"
              onChange={(e) => searchFunction!(e.target.value)}
              id="default-search"
              className="search-input"
              required
            />

            <div className="search-icon flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
              {searchIcon || (
                <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              ) }
            </div>
          </div>
        </div>
  );
};

export default SearchBar;
