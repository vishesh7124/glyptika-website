import React, { useEffect } from 'react';

const ScrollTest = () => {
    useEffect(() => {
        const handleScroll = () => {
            console.log("Scroll event fired");
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{ height: '200vh' }}> {/* Tall enough to scroll */}
            Scroll down to see the event firing.
        </div>
    );
};

export default ScrollTest;