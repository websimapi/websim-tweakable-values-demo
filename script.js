import { circleRadius, circleColor, squareSize, squareColor, animationDuration } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Apply the tweakable values to our elements
    const circle = document.querySelector('.circle');
    const square = document.querySelector('.square');
    
    // Apply initial styles based on config values
    updateStyles();
    
    // Set up animations to demonstrate changes
    setInterval(() => {
        animateElements();
    }, 2000);
    
    function updateStyles() {
        // Apply circle styles
        circle.style.width = `${circleRadius * 2}px`;
        circle.style.height = `${circleRadius * 2}px`;
        circle.style.backgroundColor = circleColor;
        
        // Apply square styles
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = squareColor;
        
        // Apply animation duration to both
        const transitionValue = `all ${animationDuration}s ease`;
        circle.style.transition = transitionValue;
        square.style.transition = transitionValue;
    }
    
    function animateElements() {
        // Small animation to show the elements responding to the tweakable values
        circle.style.transform = 'scale(1.1)';
        square.style.transform = 'rotate(15deg)';
        
        setTimeout(() => {
            circle.style.transform = 'scale(1)';
            square.style.transform = 'rotate(0)';
        }, 1000);
    }
});

