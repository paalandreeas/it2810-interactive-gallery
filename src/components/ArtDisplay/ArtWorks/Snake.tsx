import React from "react";
import { sequence } from "just-animate";
import { addPlugin } from "just-animate";
import { waapiPlugin } from "just-animate/lib/web";

interface SnakeProps {
    color: number;
}

// Gets number as prop for selection of color
// Declares color themes for the different elements in the SVG

const ColorThemes = [
    {
        background: "#FEF200",
        scissors: "#56AE40",
        snake: "#FF384E",
    },
    {
        background: "#DD8239",
        scissors: "#C24E75",
        snake: "#81C7B4",
    },
    {
        background: "#63AFE3",
        scissors: "#C75C26",
        snake: "#FFEE28",
    },
];

class Snake extends React.Component<SnakeProps> {
    constructor(props: SnakeProps) {
        super(props);
        addPlugin(waapiPlugin);
    }

    // Starts the animation when it mounts
    componentDidMount() {
        this.animate();
    }

    // Function for animating elements in the svg element. Sets transformationOrigin, duration, delays and animations. Loops infinitely
    animate() {
        const scissorLeftAnimation = sequence([
            {
                targets: "#scissorLeft",
                duration: 0,
                web: {
                    transformOrigin: "38px 35px",
                },
            },
            {
                targets: "#scissorLeft",
                duration: 400,
                web: {
                    transform: [{ value: "rotate(-30deg)" }],
                },
            },
            {
                targets: "#scissorLeft",
                duration: 400,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
            {
                targets: "#scissorLeft",
                duration: 0,
                delay: 200,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        scissorLeftAnimation.play({
            repeat: Infinity,
        });

        const scissorRightAnimationAndSnip = sequence([
            {
                targets: "#scissorRight",
                duration: 0,
                web: {
                    transformOrigin: "38px 35px",
                },
            },
            {
                targets: "#scissorRight",
                duration: 400,
                web: {
                    transform: [{ value: "rotate(10deg)" }],
                },
            },
            {
                targets: "#scissorRight",
                duration: 400,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
            {
                targets: "#scissorRight",
                duration: 0,
                delay: 200,
                web: {
                    transform: [{ value: "rotate(0deg)" }],
                },
            },
        ]);

        scissorRightAnimationAndSnip.play({
            repeat: Infinity,
        });

        const snipAnimation = sequence([
            {
                targets: "#snip",
                duration: 0,
                web: {
                    transformOrigin: "43px 73px",
                },
            },
            {
                targets: "#snip",
                duration: 400,
                delay: 200,
                web: {
                    transform: [{ value: "scale(1.2)" }],
                },
            },
            {
                targets: "#snip",
                duration: 400,
                web: {
                    transform: [{ value: "scale(1)" }],
                },
            },
        ]);

        snipAnimation.play({
            repeat: Infinity,
        });
    }

    render() {
        return (
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }}
            >
                <g id="Layer1">
                    <rect
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        style={{
                            fill: ColorThemes[this.props.color].background,
                        }}
                    />
                    <g>
                        <path
                            d="M13.52,76.329l8.402,2.671c0,-0 7.172,1.906 6.974,8.024c-0.199,6.118 -12.345,8.744 -19.896,6.78c9.643,-1.729 18.095,-7.097 11.259,-10.314c-4.742,-2.231 -5.917,-1.682 -7.262,-1.87"
                            style={{
                                fill: ColorThemes[this.props.color].snake,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M77.303,97.365l5.089,-14.093l11.247,3.666c-0,0 4.362,-17.686 -12.34,-12.951c-0.543,-1.824 -2.332,-5.359 1.614,-12.846c3.945,-7.486 3.281,-25.444 -8.948,-25.829c-12.229,-0.385 -11.846,12.725 -11.877,15.5c-0.031,2.775 -1.571,9.939 -15.92,14.465c-0.008,0.039 1.466,2.124 1.466,2.124l-1.309,2.635l2.04,0.178l-0.054,2.473c-0,-0 16.815,-7.137 17.765,-11.623c0.95,-4.486 1.956,-12.528 6.095,-12.382c4.139,0.145 4.052,7.103 0.334,14.303c-3.717,7.2 0.968,11.758 0.745,12.189c-0.223,0.43 -9.331,13.88 4.053,22.191Z"
                            style={{
                                fill: ColorThemes[this.props.color].snake,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M74.692,80.302c0,0 3.03,-3.41 4.597,-0.642c1.567,2.768 -1.724,6.67 -3.502,6.821c-1.778,0.15 -4.07,-2.697 -1.095,-6.179Z"
                            style={{
                                fill: "#fffafb",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M83.448,79.485c0,-0 2.637,2.741 4.864,0.396c2.228,-2.344 0.158,-4.49 -0.036,-4.555c-0.193,-0.064 -2.263,-1.506 -3.91,0.268c-1.647,1.774 -1.114,3.641 -0.918,3.891Z"
                            style={{
                                fill: "#fff",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <ellipse
                            cx="76.698"
                            cy="82.299"
                            rx="1.051"
                            ry="1.111"
                        />
                        <ellipse
                            cx="86.275"
                            cy="77.833"
                            rx="1.051"
                            ry="0.976"
                        />
                        <path d="M82.129,85.01c0,-0 0.086,2.965 -0.079,6.044c-0.114,2.103 2.058,3.837 3.405,3.788c1.347,-0.05 2.616,-1.489 3.577,-1.318c0.96,0.172 0.911,2.312 2.128,3.179c1.217,0.868 2.578,0.461 3.584,1.097c1.006,0.635 2.901,2.328 2.901,2.328c-0,0 -0.528,-1.993 -1.065,-2.61c0.891,0.104 2.365,0.16 3.068,0.555c-0.979,-1.216 -2.882,-2.236 -4.481,-2.324c-1.599,-0.088 -2.369,0.114 -2.906,-0.6c-0.536,-0.714 -1.37,-3.648 -3.078,-3.696c-1.709,-0.048 -3.259,1.635 -4.06,1.276c-2.293,-1.778 -0.295,-6.883 -0.916,-8.064c-0.621,-1.181 -1.312,-1.531 -1.312,-1.531l-0.766,1.876Z" />
                    </g>
                    <g id="scissorLeft">
                        <path
                            d="M17.208,88.674c-0,0 18.952,-44.525 20.46,-45.898c1.508,-1.372 16.467,-12.885 17.742,-14.589c1.718,0.362 19.508,0.654 18.779,-12.58c2.584,-0.206 5.177,-5.407 -3.475,-4.597c-1.475,1.739 -0.77,6.67 -1.47,7.525c-0.7,0.854 -9.14,3.66 -12.224,2.429c-3.084,-1.231 -4.999,-4.26 -4.999,-4.26c0,-0 2.669,-10.652 15.034,-9.275c5.094,6.225 9.384,-1.33 2.782,-4.313c-2.224,-3.091 -25.212,4.918 -27.669,17.872c-5.359,8.859 -15.393,18.245 -15.393,18.245c0,-0 -20.253,21.6 -9.567,49.441Z"
                            style={{
                                fill: ColorThemes[this.props.color].scissors,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M47.882,23.949c-0,-0 -2.33,-5.5 1.719,-6.536c3.846,-1.492 12.781,2.039 3.549,8.024"
                            style={{
                                fill: ColorThemes[this.props.color].scissors,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g id="scissorRight">
                        <path
                            d="M57.56,85.413c-0,-0 -12.76,-39.076 -18.69,-42.846c-2.985,-6.587 -16.994,0.018 -18.42,-18.506c-5.478,-1.593 -16.294,-12.225 0.145,-21.875c1.406,-4.053 5.04,-2.103 6.025,-0.503c0.985,1.601 -1.718,4.31 -4.134,3.713c-1.932,1.093 -10.08,8.559 0.966,13.143c4.519,0.736 8.3,-0.841 8.3,-0.841c0,0 10.001,-9.124 -3.505,-14.217c-1.55,-0.803 -2.32,-6.039 2.279,-4.868c4.6,1.172 14.734,10.023 6.98,22.537c1.335,2.125 2.834,4.25 2.206,7.145c1.774,1.681 24.25,20.999 17.848,57.118Z"
                            style={{
                                fill: ColorThemes[this.props.color].scissors,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M26.618,23.658c-4.984,-2.79 -1.594,-7.386 1.125,-7.469c2.719,-0.083 6.9,1.536 3.981,7.149"
                            style={{
                                fill: ColorThemes[this.props.color].scissors,
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <ellipse
                            cx="37.985"
                            cy="35.167"
                            rx="2.117"
                            ry="1.868"
                            style={{
                                fill: "#fff",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <path
                        d="M14.049,81.692c-5.448,-0.281 -8.747,-4.314 -9.32,-8.227c-1.636,-5.606 2.745,-12.115 7.539,-12.956c4.793,-0.841 8.86,-0.513 15.33,4.175c6.47,4.687 14.388,1.775 14.388,1.775l-1.534,2.996l2.765,0.812l-1.35,2.311l3.79,1.499c0,-0 -12.292,5.4 -22.27,-2.07c-7.595,-5.35 -13.547,-3.857 -13.361,0.448c0.237,3.264 3.495,3.866 3.495,3.866"
                        style={{
                            fill: ColorThemes[this.props.color].snake,
                            stroke: "#000",
                            strokeWidth: "2.08px",
                        }}
                    />
                    <g id="snip">
                        <path
                            d="M37.247,63.696l-3.467,-3.309l3.467,3.309Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M40.712,61.345l-3.006,-6.348l3.006,6.348Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M43.861,60.012l-0.286,-3.944l0.286,3.944Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M37.856,79.324l-4.834,5.921l4.834,-5.921Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M41.512,80.146l-1.674,11.348l1.674,-11.348Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M47.204,80.693l-0.609,7.063l0.609,-7.063Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                        <path
                            d="M51.242,81.91l1.206,8.236l-1.206,-8.236Z"
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "2.08px",
                            }}
                        />
                    </g>
                    <g>
                        <g>
                            <path
                                d="M88.688,25.142c0,0 4.056,-4.843 3.187,-12.585"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M86.757,7.111c-0,0 1.869,16.527 -4.1,20.116"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M80.026,21.796c-0,0 3.88,-7.533 2.573,-12.666"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                        </g>
                        <g>
                            <path
                                d="M13.068,42.379c-0,-0 -6.879,-1.384 -7.769,-6.009"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M6.446,28.052c0,-0 2.019,10.081 10.405,11.133"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                            <path
                                d="M11.235,26.623c0,0 1.054,5.536 6.482,6.475"
                                style={{
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: "2.08px",
                                }}
                            />
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}

export default Snake;
