export const imageGridConfigs = {
  1: [
    "/splash-screen/langingP1.png",
    "/splash-screen/landingP2.jpg",
    "/splash-screen/haldiLooks.jpg",
  ],
  2: [
    "/splash-screen/look2a.png",
    "/splash-screen/look2b.jpg",
    "/splash-screen/look2c.jpg",
  ],
  3: [
    "/splash-screen/look3a.jpg",
    "/splash-screen/look3b.jpg",
    "/splash-screen/look3c.jpg",
  ],
} as const;

export type ConfigKey = keyof typeof imageGridConfigs;