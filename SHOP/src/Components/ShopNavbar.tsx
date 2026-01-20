import React from 'react';

function ShopNavbar() {
    return (
        <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full">
            <div className="container mx-auto flex justify-between ">
            <div className="text-white font-bold">Vendor Portal</div>
            <div className="space-x-4">
                <span className="text-gray-400">Home</span>
                <span className="text-gray-400">Products</span>
            </div>
            </div>
        </nav>
    );
};

export default ShopNavbar;