import { useEffect, useState } from "react";
import NavbarPC from "./NavbarPc";
import NavbarM from "./NavbarM";

const Navbar = () => {
	const [width, setWidth] = useState();
	const Break = 700;

	useEffect(() => {
		if (typeof window !== 'undefined'){
			const handleResizeWindow = () => setWidth(window.innerWidth);
			// subscribe to window resize event "onComponentDidMount"
			window.addEventListener("resize", handleResizeWindow);
			return () => {
				// unsubscribe "onComponentDestroy"
				window.removeEventListener("resize", handleResizeWindow);
			};
		}

	}, []);
	if (width > Break) {
		return <NavbarPC />;
	}
	return <NavbarM />;
};

export default Navbar;