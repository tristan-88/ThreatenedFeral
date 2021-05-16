import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel"
import './Carousel.css'

function Carousel({ photos }) {
	const [index, setIndex] = useState(0);
	const max = photos.length - 1;
	useEffect(() => { }, [index]);
	const handleDrag = e => e.preventDefault()
	const items = []
	const Gallery = () => {
		return <AliceCarousel mouseTracking items={items} />;
	};

	return (
		<div className="Carousel-Container">
			{/* <button
				className="previous"
				onClick={(e) =>
                    setIndex((prev) => (prev > 0 ? prev - 1 : (prev = max)))}>⏪</button>
            <button
				className="next"
				onClick={(e) =>
					setIndex((prev) => (prev < max ? prev + 1 : (prev = 0)))}>⏩</button>


            
            <div><img src={photos[index].photo_url} alt="None" className="car-images" />{photos[index].photo_description}</div> */}
			{
				photos.map((photo) => (
					<div>
						{items.push(
							<img src={photo.photo_url} onDragStart={handleDrag}/>
						)}
					</div>
				))
			}

			{Gallery}
			
		</div>
	);
}

export default Carousel
