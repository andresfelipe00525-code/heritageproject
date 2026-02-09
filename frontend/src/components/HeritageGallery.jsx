import React from 'react';
import { galleryItems } from '../mockData';

const HeritageGallery = () => {
	return (
		<section
			id="gallery"
			className="py-24 bg-gradient-to-b from-gray-50 to-white"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Heritage Gallery
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						A curated collection of colonial architectural photography
						showcasing the beauty of heritage buildings
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{galleryItems.map((item) => (
						<div
							key={item.id}
							className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
						>
							<div className="relative h-80 overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
							</div>
							<div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
								<span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
									{item.category}
								</span>
								<h3 className="text-xl font-bold mb-2">{item.title}</h3>
								<p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="text-center">
					<button className="px-8 py-3.5 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
						View Full Gallery
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeritageGallery;
