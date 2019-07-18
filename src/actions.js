import axios from 'axios';

const APIROOT = 'https://5c78274f6810ec00148d0ff1.mockapi.io';

export default function fetchProducts(success, error) {
    axios.get(
        `${APIROOT}/api/v1/products?`
    ).then((response) => {
        success(response.data);
    }).catch(error);
}
