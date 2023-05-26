const AboutUs = () => {
    return (
            <div class="max-w-7xl mx-auto flex flex-row items-center justify-center mt-[150px]">
                <div class="flex flex-col gap-[30px]">
                    <div class="flex flex-col gap-[30px] text-white">
                        <p>Who are we?</p>
                        <p>MightyOrc is a horde of 3D unique high quality NFTs on Solana Blockchain. Join us and be the Guardian of Solana with 1 goal in mind. </p>
                        <p>Annihilate all Atrocities!!</p>
                    </div>
                    <button class="bg-white">
                        <p>See All Collection</p>
                    </button>
                </div>
                <div className="flex justify-end ml-12">
                    <img 
                    src='./aboutusimg.svg' 
                    alt=''></img>
                </div>
            </div>
    )
}

export default AboutUs;