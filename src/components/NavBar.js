const NavBar = () => {
    return (
        <div className="py-7">
            <div className="max-w-7xl mx-auto flex flex-row justify-between text-white h-[50px] items-center">
            {/* logo */}
            <div className="flex items-center gap-2">
                <img src="./logomightyorc.png" alt="logo" class="w-full h-full"></ img>
                <p className="text-[24px] font-bold">MIGHTYORC.</p>
            </div>
            {/* menu */}
            <div className="">
                <ul className="flex flex-row gap-8 text-[14px]">
                    <li>Who We Are</li>
                    <li>Collection</li>
                    <li>Roadmap</li>
                    <li>Team</li>
                    <li>Contact</li>
                    <li>Pitch Deck</li>
                </ul>
            </div>
            {/* connect wallet button */}
            <div>
                <button>
                    <p className="text-[14px]">Connect Wallet</p>
                </button>
            </div>
            </div>
        </div>

    )
}

export default NavBar;