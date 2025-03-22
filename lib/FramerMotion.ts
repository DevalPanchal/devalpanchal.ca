export const FramerAnimations = {
    fadeIn: {
        hidden: { opacity: 0, y: 75 },
		visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
    },
    staggerCards: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	},
    cardVariant: {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	},
    socialVariant: {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
			},
		},
	},
    iconVariant: {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.4 },
		},
	},
	slideInFromLeft: {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    slideInFromRight: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
	slideInFromTop: {
		hidden: { opacity: 0, y: -100 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
	},
	slideInFromBottom: {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
	}
}