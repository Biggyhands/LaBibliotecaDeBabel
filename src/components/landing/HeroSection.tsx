"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HeroSubtitle, HeroTitle } from "@/lib/constants";

export function HeroSection() {
	const [imageIndex, setImageIndex] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setImageIndex((prevIndex) => (prevIndex === 3 ? 1 : prevIndex + 1));
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<section className='relative h-[600px] flex items-center justify-center'>
			{/* Background Image */}
			<div className='absolute inset-0 w-full h-full'>
				<Image
					src={`/images/library-${imageIndex}.jpg`}
					alt='Hero Image'
					className='object-cover object-center transition-opacity duration-500'
					fill
					priority
					sizes='100vw'
				/>
				{/* Darker overlay for better text visibility */}
				<div className='absolute inset-0 bg-black/60'></div>
			</div>

			{/* Content */}
			<div className='relative z-10 container mx-auto px-4'>
				<div className='flex flex-col items-center justify-center space-y-6 text-center'>
					<h1
						className='text-4xl md:text-5xl lg:text-6xl font-bold text-white 
                        leading-tight max-w-4xl animate-fade-in'
					>
						{HeroTitle}
					</h1>
					<p
						className='text-lg md:text-xl text-gray-200 max-w-2xl 
                        leading-relaxed animate-fade-in-delay'
					>
						{HeroSubtitle}
					</p>
				</div>
			</div>

			{/* Optional: Navigation Dots */}
			<div
				className='absolute bottom-6 left-1/2 transform -translate-x-1/2 
                flex space-x-2 z-20'
			>
				{[1, 2, 3].map((index) => (
					<button
						key={index}
						onClick={() => setImageIndex(index)}
						className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
                            ${imageIndex === index ? "bg-white scale-125" : "bg-white/50"}`}
						aria-label={`Go to slide ${index}`}
					/>
				))}
			</div>
		</section>
	);
}
