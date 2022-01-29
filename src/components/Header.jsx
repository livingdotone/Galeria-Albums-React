import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-500 text-white shadow p-5 flex justify-between items-center">
      <h1 className="text-3xl">Galeria de Albums</h1>
      <div>
        <Link
          to="/"
          className="ml-4 border p-2 hover:bg-gray-100 hover:text-slate-600"
        >
          Albums
        </Link>
      </div>
    </header>
  );
};

export default Header;
