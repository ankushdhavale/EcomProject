import React from "react";

const VideoPlayer = ({ src }) => {
	return (
		<div className='relative w-[100%] max-w-5xl h-full m-auto rounded-md overflow-hidden '>
			<video
				src={src}
				className='w-full h-auto block rounded-lg'
				autoPlay
				loop
				muted
				playsInline
			/>
		</div>
	);
};

export default VideoPlayer;
