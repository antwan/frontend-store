import React, { useState, useEffect, memo }  from 'react';
import fetchProducts from './actions';

export const Product = memo((props) => {
    return (
        <div>
            <img src={props.img} alt="" title={props.description} />
            <button
                onClick={props.toggleLike}
                className={`like ${props.liked ? 'liked' : ''}`}
                title={props.liked ? 'Dislike' : 'Like'}>
                    {props.liked ? 'Dislike' : 'Like'}
            </button>
            <span className="strong">&pound;{props.price}</span>
            <span>{props.title}</span>
            <span>{props.brand}</span>
            <span>{props.size}</span>
        </div>
    );
}, (prevProps, nextProps) => prevProps.liked === nextProps.liked);

export const LikedProduct = (props) => {
    return (
        <span>
            <button onClick={props.remove} className="cross" title="Dislike item"></button>
            {props.title}
        </span>
    );
};

const ProductsList = (props) => {
    const [products, setProducts] = useState([]);
    const [soldVisible, setSoldVisibility] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        fetchProducts(setProducts, setErrorMsg)
    }, []);

    const toggleVisibility = () => {
        setSoldVisibility(! soldVisible);
    }
    const toggleLiked = (product) => {
        setProducts(products => products.map((p) => {
           return (p === product) ? {...product, liked: !product.liked} : p;
        }));
    }

    const productsCount = products.filter(item => (soldVisible || !item.sold)).length;
    const likedProducts = products.filter(item => item.liked);
    const loading = !errorMsg && !products.length;

    return <>
        {products.length ? <div>
            <header>
                <div className="collapsible" tabIndex="0">
                    <span>{likedProducts.length} likes</span>
                    <ul>
                        {likedProducts.map((item, i) => <li key={item.id}>
                            <LikedProduct title={item.title} remove={() => {toggleLiked(item)}} />
                        </li>
                        )}
                    </ul>
                </div>
            </header>

            <div className="toolbar">
                <span>{productsCount} items</span>
                <button onClick={toggleVisibility}>{soldVisible ? 'Hide sold products' : 'Show sold products'}</button>
            </div>
            <ul className="itemlist">
                {products.map((item, i) =>
                    (soldVisible || ! item.sold) && <li key={item.id}>
                        <Product toggleLike={() => {toggleLiked(item)}} {...item} />
                    </li>
                )}
            </ul>
        </div> : null}
        {errorMsg && <div className="error">{errorMsg}</div>}
        {loading && <div className="loading">Loading...</div>}
    </>
}

function App() {
  return (
    <div className="container">
        <ProductsList />
    </div>
  )
}

export default App;
