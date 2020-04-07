import React from "react";


import img1 from "../../../../assets/images/soup.png";
import img2 from "../../../../assets/images/soup2.png";
import img3 from "../../../../assets/images/soup3.png";
import img4 from "../../../../assets/images/soup4.png";
import img5 from "../../../../assets/images/soup5.png";
import img6 from "../../../../assets/images/soup6.png";

import "./index.scss";

const Gallery = () => {
	return (
		<>
			<section className="gallery_section">
				<h1>Gallery</h1>

				<div className="image_gallery">
					<img
						src={img1}
						alt="soup"
						data-aos-offset="200"
						data-aos-delay="500"
						data-aos-duration="50000"
						data-aos="fade-down"
					/>
					<img
						src={img2}
						alt="soup"
						data-aos-offset="200"
						data-aos-delay="500"
						data-aos-duration="50000"
						data-aos="fade-down"
					/>
					<img
						src={img3}
						alt="soup"
						data-aos-offset="200"
						data-aos-delay="500"
						data-aos-duration="50000"
						data-aos="fade-down"
					/>
					<img
						src={img4}
						alt="soup"
						data-aos-offset="200"
						data-aos-delay="500"
						data-aos-duration="50000"
						data-aos="fade-down"
					/>
					<img
						src={img5}
						alt="soup"
						data-aos-offset="200"
						data-aos-delay="500"
						data-aos-duration="50000"
						data-aos="fade-down"
					/>
					<img
						src={img6}
						alt="soup"
						data-aos-offset="200"
						data-aos-delay="500"
						data-aos-duration="50000"
						data-aos="fade-down"
					/>
				</div>
			</section>
		</>
	);
};

export default Gallery;
