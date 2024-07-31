import Image from 'next/image';
import React from 'react';

function Header() {
    return (
        <header className="py-4">
            <div className="flex items-center justify-center">
                <div className="w-80 h-auto flex items-center justify-center overflow-hidden">
                    <Image
                        src="/bob-full.png"
                        alt="Bank of Baroda"
                        width={320} // Adjust to match your image's aspect ratio
                        height={80} // Adjust to match your image's aspect ratio
                        layout="intrinsic" // or use 'responsive' if you want it to scale
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
