import { Box, BoxProps, SxProps } from "@mui/material";
import { motion, useMotionValue } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  sx?: SxProps;
  boxProps?: BoxProps;
};

export default function Carousel({ children, sx, ...boxProps }: Props) {
  const DRAG_BUFFER = 50;
  const DRAG_WIDTH = 320;

  const slides: React.ReactNode[] = Array.isArray(children)
    ? children
    : [children];

  const [index, setIndex] = React.useState(5);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && index < slides.length - 1) {
      setIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && index > 0) {
      setIndex((pv) => pv - 1);
    }
  };

  console.log(window.screen.width / 2 - DRAG_WIDTH / 2 + -DRAG_WIDTH * index);

  return (
    <Box
      {...boxProps}
      sx={{
        overflow: "hidden",
        ...sx,
      }}
    >
      <Box
        component={motion.div}
        sx={{ display: "flex", mb: 2 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={onDragEnd}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `${
            window.screen.width / 2 - DRAG_WIDTH / 2 + -DRAG_WIDTH * index
          }px`,
        }}
        transition={{ type: "spring", bounce: 0.25 }}
      >
        {slides.map((child, i) => (
          <Box
            component={motion.div}
            key={i}
            sx={{
              flexShrink: 0,
              flexBasis: DRAG_WIDTH,
              "& > *": {
                pointerEvents: "none",
                scale: `${1 - Math.abs(index - i) / 5}`,
                transition: "scale 100ms ease-in-out",
              },
            }}
            onClick={() => {
              setIndex(i);
            }}
          >
            {child}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
