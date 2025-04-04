import { ourMissionText } from "@/lib/constants";
import React from "react";

const OurMission = () => {
	return (
		<div className='mt-16 text-center'>
			<div className='max-w-3xl mx-auto'>
				<h3 className='text-2xl font-semibold mb-4'>Nuestra Misión</h3>
				<p className='text-gray-600 italic'>
					&ldquo;
					{ourMissionText}
					&rdquo;
				</p>
			</div>
		</div>
	);
};

export default OurMission;
