import React from 'react'
import { FaSearch } from 'react-icons/fa'
type Props = {
  city: string;
  setCity: (value: string) => void;
  onSearch: () => void;
};


export default function SearchBar({ city, setCity, onSearch }:Props) {
  return (
    <div className='relative  mx-2 mt-8'>
        <input
        type="text"
        className="w-full border border-white text-white px-3 py-4 mt-5 rounded-3xl focus:outline-none focus:border-white focus:ring-0 placeholder-white"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nhập tên thành phố..."
      />
      <FaSearch className='absolute top-1/2 right-3 text-white' onClick={onSearch}/>
    </div>
  )
}