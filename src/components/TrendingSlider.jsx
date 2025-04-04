import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { trendingProducts } from "../context/dataDb";

const TrendingSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplayspeed: 100,
		cssEase: "linear",
		arrows: false,
	};

	return (
		<>
			<div className='my-5'>
				<Slider {...settings}>
					{trendingProducts.map((item, index) => (
						<div key={index} className='slide'>
							<img
								src={item.image}
								alt={item.name}
								className='rounded'
								style={{ width: "180px", height: "180px" }}
							/>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default TrendingSlider;
