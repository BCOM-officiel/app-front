import { Box } from "@mui/material";
import React from "react";

const slideWidth = 360;
const slideGap = 18;

interface CarouselProps {
  slides: JSX.Element[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const [indexCentered, setIndexCentered] = React.useState<number>(3);

  return (
    <Box
      sx={{
        overflowX: "scroll",
        scrollSnapType: "x mandatory",
        display: "flex",
        gap: `${slideGap}px`,
        px: `${slideGap * 4 + slideWidth * 2}px`,
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {slides.map((slide: JSX.Element, index) => (
        <CarouselItem
          key={index}
          indexCentered={indexCentered}
          setIndexCentered={setIndexCentered}
          index={index}
          slide={slide}
        />
      ))}
    </Box>
  );
};

interface CarouselItemProps {
  slide: JSX.Element;
  index: number;
  indexCentered: number;
  setIndexCentered: (index: number) => void;
}

const CarouselItem = ({
  slide,
  index,
  indexCentered,
  setIndexCentered,
}: CarouselItemProps) => {
  const ref = React.useRef<Element>();

  const ratio = Math.abs(index - indexCentered);
  const scale = ratio >= 3 ? 0.4 : ratio >= 2 ? 0.5 : ratio >= 1 ? 0.7 : 1;
  const opacity = ratio >= 3 ? 0 : 1;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) setIndexCentered(index);
      },
      { rootMargin: "0% -50% 0% -50%", threshold: 0 }
    );
    observer.observe(ref.current!);
  }, [setIndexCentered, index]);

  return (
    <Box
      onClick={() => {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }}
      ref={ref}
      sx={{
        flex: `0 0 ${slideWidth}px`,
        scrollSnapAlign: "center",
        mb: 2,
        scale: `${scale}`,
        opacity: `${opacity}`,
        transition: "scale 200ms ease-in, opacity 100ms ease-in",
        cursor: "pointer",
      }}
    >
      {slide}
    </Box>
  );
};

export default Carousel;
