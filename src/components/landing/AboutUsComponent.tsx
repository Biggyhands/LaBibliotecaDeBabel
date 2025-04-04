"use client";

import AboutHeading from "./AboutHeading";
import OurMission from "@/components/landing/OurMission";
import { featureData } from "@/lib/helpers/featureData";

export function AboutUsComponent() {
	// Datos de características de la biblioteca

	return (
		<section className=' py-28 px-4 bg-gray-50'>
			{/* Encabezado de la sección */}
			<AboutHeading />

			{/* Mapeo de las características */}
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{featureData.map((feature, index) => (
						<div
							key={index}
							className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'
						>
							<div className='w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mb-4'>
								{feature.icon}
							</div>
							<h3 className='font-semibold text-xl mb-2'>{feature.title}</h3>
							<p className='text-gray-600'>{feature.description}</p>
						</div>
					))}
				</div>

				{/* mission section */}
				<OurMission />
			</div>
		</section>
	);
}
