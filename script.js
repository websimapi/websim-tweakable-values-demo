import { 
    circleRadius, 
    circleColor, 
    squareSize, 
    squareColor, 
    animationDuration,
    borderWidth,
    borderColor,
    borderStyle,
    shadowBlur,
    shadowColor,
    particleCount,
    particleSize,
    bgEffectSpeed,
    pulseIntensity
} from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Apply the tweakable values to our elements
    const circle = document.querySelector('.circle');
    const square = document.querySelector('.square');
    const demoBox = document.querySelector('.demo-box');
    
    // Create particles for background effect
    createParticles();
    
    // Apply initial styles based on config values
    updateStyles();
    
    // Set up animations to demonstrate changes
    setInterval(() => {
        animateElements();
    }, 2000);

    // Function to create floating particles
    function createParticles() {
        // Clear any existing particles
        demoBox.querySelectorAll('.particle').forEach(p => p.remove());
        
        // Create new particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size between min and max
            const size = Math.random() * (particleSize.max - particleSize.min) + particleSize.min;
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Set styles
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = Math.random() * 0.6 + 0.2;
            
            // Random color variation
            const hue = Math.random() * 60 - 30; // +/- 30 degrees from base color
            particle.style.backgroundColor = `hsla(${hue + 210}, 90%, 70%, 0.3)`;
            
            // Animation
            particle.style.animation = `float ${5 / bgEffectSpeed + Math.random() * 5}s infinite linear`;
            
            demoBox.appendChild(particle);
        }
    }
    
    function updateStyles() {
        // Apply circle styles
        circle.style.width = `${circleRadius * 2}px`;
        circle.style.height = `${circleRadius * 2}px`;
        circle.style.backgroundColor = circleColor;
        circle.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
        circle.style.boxShadow = `0 0 ${shadowBlur}px ${shadowColor}`;
        
        // Apply square styles
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = squareColor;
        square.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
        square.style.boxShadow = `0 0 ${shadowBlur}px ${shadowColor}`;
        
        // Apply animation duration to both
        const transitionValue = `all ${animationDuration}s ease`;
        circle.style.transition = transitionValue;
        square.style.transition = transitionValue;
        
        // Update particles
        createParticles();
        
        // Add keyframe animation if not already added
        if (!document.getElementById('floatAnimation')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'floatAnimation';
            styleSheet.textContent = `
                @keyframes float {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(${20 * bgEffectSpeed}px, ${-15 * bgEffectSpeed}px) rotate(${120 * bgEffectSpeed}deg); }
                    66% { transform: translate(${-15 * bgEffectSpeed}px, ${25 * bgEffectSpeed}px) rotate(${240 * bgEffectSpeed}deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(${1 + pulseIntensity}); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(styleSheet);
        }
    }
    
    function animateElements() {
        // More complex animation to showcase the tweakable values
        circle.style.transform = `scale(1.1) rotate(15deg)`;
        square.style.transform = `rotate(45deg) scale(0.9)`;
        
        setTimeout(() => {
            circle.style.transform = 'scale(1) rotate(0)';
            square.style.transform = 'scale(1) rotate(0)';
        }, 1000);
        
        // Pulse animation with configurable intensity
        circle.style.animation = `pulse ${1.5 / bgEffectSpeed}s infinite`;
        setTimeout(() => {
            square.style.animation = `pulse ${1.5 / bgEffectSpeed}s infinite`;
        }, 500);
        
        setTimeout(() => {
            circle.style.animation = 'none';
            square.style.animation = 'none';
        }, 1500);
    }
});