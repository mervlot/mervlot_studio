import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
        <StyledWrapper>
            <div className="m2">
                <div className="logo">
                    <svg width="64px" height="64px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 170" version="1.1">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="10%" style={{ stopColor: '#626262', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#aaa', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path d="m150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zm-31.26-123.01c0 8.1021-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.3113 11.45-8.597 4.62-2.2516 8.99-3.4968 13.1-3.71 0.12 1.0831 0.17 2.1663 0.17 3.2409z" fill="url(#grad1)" />
                    </svg>
                    <span>M2</span>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .m2 {
    position: relative;
    width: 20vmin; /* Reduced size */
    height: 20vmin; /* Reduced size */
    background: linear-gradient(135deg, #1e1e24 10%, #050505 60%);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    animation: gradient-shift 5s ease-in-out infinite; /* Faster animation */
    background-size: 200% 200%; /* Gradient shift */
  }

  .m2 .logo {
    display: inline-block;
    vertical-align: baseline;
    user-select: none;
    font-size: 5vmin; /* Smaller font size */
    color: white;
    background-image: linear-gradient(to right, #626262, #fff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bold;
  }

  .m2 .logo svg {
    margin-right: -1vmin;
    width: 5vmin; /* Smaller SVG size */
    height: 5vmin; /* Smaller SVG size */
  }

  .m2::before,
  .m2::after {
    --size: 5px; /* Reduced glow size */
    content: "";
    position: absolute;
    top: calc(var(--size) / -2);
    left: calc(var(--size) / -2);
    width: calc(100% + var(--size));
    height: calc(100% + var(--size));
    background: radial-gradient(circle at 0 0, hsl(27deg 93% 60%), transparent),
      radial-gradient(circle at 100% 0, #00a6ff, transparent),
      radial-gradient(circle at 0 100%, #ff0056, transparent),
      radial-gradient(circle at 100% 100%, #6500ff, transparent);
  }

  .m2::after {
    --size: 2px; /* Reduced inner glow size */
    z-index: -1;
  }

  .m2::before {
    --size: 10px; /* Reduced outer glow size */
    z-index: -2;
    filter: blur(2vmin); /* Reduced blur */
    animation: blur-animation 3s ease-in-out alternate infinite; /* Faster blur animation */
  }

  /* Faster blur animation */
  @keyframes blur-animation {
    to {
      filter: blur(3vmin);
      transform: scale(1.05);
    }
  }

  /* Faster gradient animation */
  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }`;

export default Card;
