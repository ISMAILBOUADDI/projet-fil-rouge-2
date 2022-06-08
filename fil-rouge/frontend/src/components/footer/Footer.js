import React from 'react'

const Footer = () => {
  return (
<footer className="relative">
	<div className="h-32 "></div>
		<div className="relative text-black-500  ">
			<div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden "
				style={{height: "80px"}}>
			</div>
			<hr className="border-gray-400" />
			<div className=" flex flex-wrap h-24 items-center md:justify-between justify-center bg-yellow-700">
				<div className="w-full md:w-4/12 px-4 mx-auto text-center">
					<div className=" text-sm text-white font-semibold">
						Created By
						<a href="https://github.com/mmerguoum"
							className="text-white hover:text-gray-900"> © 2022 Artshop All right Reserved</a>.
					</div>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer;