/* eslint-disable @typescript-eslint/no-explicit-any */
export const touchScroller = () => {

    document.addEventListener('mousedown', handleMouseDown, false);
    document.addEventListener('touchstart', handleTouchStart, false);

    let yDown: number | null = null;

    function handleMouseDown(event: { clientY: number | null; }) {
        yDown = event.clientY;
        document.addEventListener('mousemove', handleMouseMove, false);
        document.addEventListener('mouseup', handleMouseUp, false);
    }

    function handleMouseMove(event: { clientY: any; }) {
        if (yDown === null) {
            return;
        }

        const yUp = event.clientY;
        const yDiff = yDown - yUp;

        // Vertical scroll with smooth scrolling
        smoothScroll(yDiff * 2);

        yDown = yUp;
    }

    function handleMouseUp() {
        yDown = null;
        document.removeEventListener('mousemove', handleMouseMove, false);
        document.removeEventListener('mouseup', handleMouseUp, false);
    }

    function handleTouchStart(event: any) {
        const firstTouch = event.touches[0];
        yDown = firstTouch.clientY;
        document.addEventListener('touchmove', handleTouchMove, false);
        document.addEventListener('touchend', handleTouchEnd, false);
    }

    function handleTouchMove(event: any) {
        if (yDown === null) {
            return;
        }

        const yUp = event.touches[0].clientY;
        const yDiff = yDown - yUp;

        // Vertical scroll with smooth scrolling
        smoothScroll(yDiff * 2);

        yDown = yUp;
    }

    function handleTouchEnd() {
        yDown = null;
        document.removeEventListener('touchmove', handleTouchMove, false);
        document.removeEventListener('touchend', handleTouchEnd, false);
    }

    function smoothScroll(distance: number) {
        const duration = 100; // Duration of the smooth scroll animation in milliseconds
        const initialY = window.scrollY;
        let startTime: number | null = null;

        function animate(currentTime: number) {
            if (startTime === null) {
                startTime = currentTime;
            }
            const timeElapsed = currentTime - startTime;
            const scrollY = easeInOutQuad(timeElapsed, initialY, distance, duration);
            // const scrollY = initialY + (distance * timeElapsed) / duration
            window.scrollTo(0, scrollY);
            if (timeElapsed < duration) {
                requestAnimationFrame(animate);
            }
        }

        function easeInOutQuad(t: number, b: number, c: number, d: number) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        distance *= 50
        requestAnimationFrame(animate);
    }

}