import React from "react";

const VideoPlayer = ({ src }) => {
	return (
		<div className='mt-2 relative w-[100%] max-w-7xl px-4 h-screen m-auto rounded-md overflow-hidden '>
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
