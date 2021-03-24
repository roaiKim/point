```html
<div className="circle-wrap">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <svg width="740" height="600">
                <defs>
                    <radialGradient id="flyline-gradient-id-99e886af00b94129a5ad0b24c6f3d7ee" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
                        <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="halo-gradient-id-5ed0995625d9451788c604f11a8d62ad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#fff" stop-opacity="0"/>
                        <stop offset="100%" stop-color="#fff" stop-opacity="1"/>
                    </radialGradient>
                </defs>
                <g>
                    <defs>
                        <circle id="halo0.002590223527126234355.2,2100" cx="355.2" cy="210">
                            <animate attributeName="r" values="1;120" dur="2.1s" repeatCount="indefinite"></animate>
                            <animate attributeName="opacity" values="1;0" dur="2.1s" repeatCount="indefinite"></animate>
                        </circle>
                    </defs>
                    <mask id="mask0.002590223527126234355.2,2100">
                        <use href="#halo0.002590223527126234355.2,2100" fill="url(#halo-gradient-id-5ed0995625d9451788c604f11a8d62ad)"></use>
                    </mask>
                    <use href="#halo0.002590223527126234355.2,2100" fill="#fb7293" mask="url(#mask0.002590223527126234355.2,2100)"></use>
                </g>
            </svg>
            ```

``` css
.data-v {
    .circle-wrap {
        width: 200px;
        height: 200px;
        position: relative;
        border: 1px solid red;
        .circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgb(251, 114, 147);
            position: absolute;
            opacity: 0;
            top: 50%;
            left: 50%;

            &:first-child {
                animation: warn 2.1s ease-out infinite;
            }

            &:nth-child(2) {
                animation: warn 2.1s ease-out 1.2s infinite;
            }
        }
    }
}

@-webkit-keyframes "warn" {
	0% {
		-webkit-transform: scale(0);
		opacity: 1;
	}
	100% {
		-webkit-transform: scale(2);
		opacity: 0.0;
	}
}
```