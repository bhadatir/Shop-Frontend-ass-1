import { useState } from 'react'
import ShopNavbar from './ShopNavbar'
import ShopSidebar from './ShopSidebar'
import ProductDetail from './ProductDetail'

function Home(){

    return (
        <div>
            {window.innerWidth <= 768 ? <ShopSidebar /> : <ShopNavbar />}
            
            <div>
                {(() => {
                    const products = JSON.parse(localStorage.getItem('products') || '[]');
                    return products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 mt-16">
                            {products.map((product: any) => (
                                <div key={product.id} className="product-item">
                                    <ProductDetail
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        category={product.category}
                                        stock={product.stock}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No products found</p>
                    );
                })()}
            </div>

        </div>
    )
}

export default Home