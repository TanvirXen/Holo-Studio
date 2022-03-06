import { useState, useCallback, useEffect } from "react";
import NavbarPC from "./NavbarPc";
import NavbarM from "./NavbarM";

const useMediaQuery = (width) => {
	const [targetReached, setTargetReached] = useState(false);

	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true);
		} else {
			setTargetReached(false);
		}
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(max-width: ${width}px)`);
		media.addListener(updateTarget);

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeListener(updateTarget);
	}, []);

	return targetReached;
};
const Navbar = () => {
	const isBreakpoint = useMediaQuery(925);
	return <div>{isBreakpoint ?<NavbarM />  : <NavbarPC />}</div>;
};

export default Navbar;