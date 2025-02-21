import React, { useContext, useState, useEffect } from "react";
import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { product, search } = useContext(ShopContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
console.log(product);

  // Detect screen size for mobile responsiveness
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Reset filter on desktop view
      }
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleFilterClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const shouldShowOptions = isMobile ? isOpen : true;

  const handleCategoryCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleTypeCheckboxChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  // Filtered product based on selected categories and types
  const filteredproduct =
    (selectedCategories.length === 0 && selectedTypes.length === 0)
      ? product.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      : product.filter(
          (item) =>
            (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
            (selectedTypes.length === 0 || selectedTypes.includes(item.subCategory)) &&
            item.name.toLowerCase().includes(search.toLowerCase())

        );

  // Sorting logic
  const sortedproduct = [...filteredproduct].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    return 0; // No sorting
  });

  // Pagination logic
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = sortedproduct.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(sortedproduct.length / postsPerPage); // Total pages
  const pages = [...Array(totalPages).keys()].map((i) => i + 1); // Pages array

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  console.log(selectedCategories)

  return (
    <div className="flex flex-col sm:flex-row gap-1 pt-8">
      {/* Filter Section */}
      <div className="sm:w-1/4 p-4">
        <h1 onClick={handleFilterClick} className="font-semibold text-xl">
          FILTERS
        </h1>

        {shouldShowOptions && (
          <>
            {/* Category Filter */}
            <div className="flex flex-col justify-center p-4 gap-4 border-[2px] mt-4 border-slate-300">
              <p className="font-medium text-gray-500">Category</p>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() => handleCategoryCheckboxChange("Men")}
                  checked={selectedCategories.includes("Men")}
                />
                <p>Men</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() => handleCategoryCheckboxChange("Womens")}
                  checked={selectedCategories.includes("Womens")}
                />
                <p>Women</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() => handleCategoryCheckboxChange("Kids")}
                  checked={selectedCategories.includes("Kids")}
                />
                <p>Kids</p>
              </div>
            </div>

            {/* Type Filter */}
            <div className="flex flex-col justify-center p-4 gap-4 border-[2px] mt-4 border-slate-300">
              <p className="font-medium text-gray-500">Type</p>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() => handleTypeCheckboxChange("Topwear")}
                  checked={selectedTypes.includes("Topwear")}
                />
                <p>Topwear</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() => handleTypeCheckboxChange("Bottomwear")}
                  checked={selectedTypes.includes("Bottomwear")}
                />
                <p>Bottomwear</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() => handleTypeCheckboxChange("Footwear")}
                  checked={selectedTypes.includes("Footwear")}
                />
                <p>Footwear</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Product List Section */}
      <div className="w-3/4">
        {/* Title and Sort */}
        <div className="flex justify-between items-center">
          <Title text1={"ALL"} text2={"COLLECTION"} />

          <select
            className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="">Sort by: Relevant</option>
            <option value="lowToHigh">Sort by: Low to High</option>
            <option value="highToLow">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 py-8">
          {currentPosts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="join flex items-center justify-center py-8">
          {pages.map((e) => (
            <input
              key={e}
              className="join-item btn btn-square"
              onClick={() => setCurrentPage(e)}
              type="radio"
              aria-label={`${e}`}
              checked={currentPage === e}
              onChange={() => {}}
              disabled={currentPage === e} // Disable current page button
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
