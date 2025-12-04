'use client';

import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
  style = {},
}: LottieAnimationProps) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={{ maxWidth: '100%', height: 'auto', ...style }}
    />
  );
};
