import React from "react";

const Order = () => {
  return (
    <div>
      <h2>Your Oderers here</h2>

      <div className="mt-12 ml-12">
        <div className="h-96  w-72 carousel carousel-vertical rounded-box">
          <div className="carousel-item h-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://staticc.sportskeeda.com/editor/2023/04/ef6a2-16823161722165-1920.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://image.cnbcfm.com/api/v1/image/107168566-1671481983597-gettyimages-1450398458-mj1_4451_ce4b38b2-9f26-404e-b214-cf8454d82d0f.jpeg?v=1671482283" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://www.aljazeera.com/wp-content/uploads/2022/12/SSS10794_1-1.jpg?resize=770%2C513&quality=80" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://www.nzherald.co.nz/resizer/sLDj54v6mBmfljZa9s1py-m9cJM=/576x613/filters:focal(1327x18:1903x632)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/4B4ALEPEEVD3TN76KTWF43A5ZM.JPG" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw3QmXbOsWJ_63Dcifg9HIj19hSc1jUdC38yxHs8muc8dPDEgZANFhwwGRSk-vD7Jk18&usqp=CAU" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmUY_NeK1byT4WXdCwri8rC95xAKmPD-vGGYex0EyFtWPfvQaGwtDtXtF9-NcAApK8Hs&usqp=CAU" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
