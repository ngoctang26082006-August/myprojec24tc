const productList = [
    { id: "02", name: "Mèo Anh Lông Ngắn ", price:'12-20 triệu',image: "../asset/mèo anh lông ngắn.jpg", productLink: "product-detail.html" },
    { id: "03", name: "Mèo Tai Cụp ", price: '12-20 triệu', image: "../asset/mèo tai cụp.jpg", productLink: "product-detail.html" },
    { id: "04", name: "Mèo Hoa Vàng ", price:'500-1 triệu', image: "../asset/mèo hoa vàng.jpg", productLink: "product-detail.html" },
    { id: "05", name: "Mèo Maine Coon", price: '49-200 triệu', image: "../asset/Mèo Maine Coon.jpg", productLink: "product-detail.html" },
    { id: "06", name: "Mèo rừng Châu Phi", price: '500-1 triệu', image: "../asset/Mèo rừng Châu Phi.jpg", productLink: "product-detail.html" },
    { id: "07", name: "Mèo nhà Kiều Ngọc", price: 'vô giá', image: "../asset/MÈO NHÀ NGỌC.jpg", productLink: "product-detail.html" },
    
];

function addProduct(id, name, price, image, link) {

    const productListDiv = document.getElementById("product-list");

    // khung ngoài (4 cột giống ảnh)
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "col-md-3 mb-4 product-item text-center");


    // ===== IMAGE =====
    const productImage = document.createElement("div");

    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", name);
    img.setAttribute("class", "img-fluid");

    productImage.appendChild(img);

    // ===== INFO =====
    const productInfo = document.createElement("div");

    // tên
    const productName = document.createElement("p");
    productName.textContent = name;

    // giá
    const productPrice = document.createElement("p");
    productPrice.textContent = price + "/VND";

    // nút link
    const productLink = document.createElement("a");
    productLink.setAttribute("href", link + "?id=" + id);
    productLink.setAttribute("class", "btn btn-info btn-sm");
    productLink.textContent = "Xem chi tiết";

    // ghép
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    productListDiv.appendChild(productItem);
}
