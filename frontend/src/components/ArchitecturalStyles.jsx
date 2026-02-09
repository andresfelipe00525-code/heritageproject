import React from 'react';
import { architecturalStyles } from '../mockData';

const ArchitecturalStyles = () => {
	return (
		<section id="styles" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Architectural Styles
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Explore the rich architectural heritage of Ibero-American colonial
						styles
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{architecturalStyles.map((style) => (
						<div
							key={style.id}
							className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
						>
							<div className="relative h-64 overflow-hidden">
								<img
									src={style.image}
									alt={style.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								/>
							</div>
							<div className="p-6">
								<div className="flex justify-between items-start mb-3">
									<h3 className="text-xl font-bold text-gray-900">
										{style.name}
									</h3>
									<span className="text-sm font-medium text-gray-500">
										{style.period}
									</span>
								</div>
								<p className="text-gray-600 mb-6 leading-relaxed">
									{style.description}
								</p>
								<button className="w-full py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
									View Details
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ArchitecturalStyles;
