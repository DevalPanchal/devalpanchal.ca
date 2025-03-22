import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
	const generateStars = (count: number, size: number) => {
		const stars = [];

		for (let i = 0; i < count; i++) {
			stars.push({
				right: `${Math.floor(Math.random() * 5000)}px`,
				top: `${Math.floor(Math.random() * 2000)}px`,
				size: `${size}px`,
			});
		}
		return stars;
	};

	const smallStars = useRef(generateStars(150, 1));
	const mediumStars = useRef(generateStars(150, 2));
	const largeStars = useRef(generateStars(150, 3));

	return (
		<div className="starry-background">
			<div className="stars-container" id="stars">
				{smallStars.current.map((star, index) => (
					<div
						key={`small-${index}`}
						className="star"
						style={{
							top: star.top,
							right: star.right,
							width: star.size,
							height: star.size,
						}}
					/>
				))}
			</div>
			<div className="stars-container" id="stars2">
				{mediumStars.current.map((star, index) => (
					<div
						key={`medium-${index}`}
						className="star"
						style={{
							top: star.top,
							right: star.right,
							width: star.size,
							height: star.size,
						}}
					/>
				))}
			</div>
			<div className="stars-container" id="stars3">
				{largeStars.current.map((star, index) => (
					<div
						key={`large-${index}`}
						className="star"
						style={{
							top: star.top,
							right: star.right,
							width: star.size,
							height: star.size,
						}}
					/>
				))}
			</div>
			<style jsx>{`
				.starry-background {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: radial-gradient(
						ellipse at bottom,
						#1b2735 0%,
						#090a0f 100%
					);
					overflow: hidden;
				}

				.stars-container {
					position: absolute;
					width: 100%;
					height: 100%;
				}

				.star {
					position: absolute;
					background-color: #fff;
					border-radius: 50%;
				}

				#stars {
					animation: animStar 50s linear infinite;
				}

				#stars2 {
					animation: animStar 100s linear infinite;
				}

				#stars3 {
					animation: animStar 150s linear infinite;
				}

				@keyframes animStar {
					from {
						transform: translateY(0);
					}
					to {
						transform: translateY(-2000px);
					}
				}
			`}</style>
		</div>
	);
};

export default StarryBackground;
