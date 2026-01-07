const SERVER_URL = 'http://localhost:301';

export const popProduct = async function (sku) {
    try {
        console.log('here in modle...',sku);
        
        // let productAdded = {};
        await fetch(`${SERVER_URL}/items/push/item`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // mode: "no-cors",
            body: JSON.stringify(product),
        });
        // .then(res => res.json())
        //     .then(data => productAdded = data);
        // return productAdded;
    } catch (err) {
        throw err;
    }
}