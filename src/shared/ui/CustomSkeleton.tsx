import React from "react";
import { Skeleton, SkeletonProps, useTheme } from "@mui/material";

type CustomSkeletonProps = SkeletonProps & {
  children?: React.ReactNode;
};

export function CustomSkeleton({ children, sx, ...rest }: CustomSkeletonProps) {
  const theme = useTheme();

  return (
    <Skeleton
      animation="wave"
      sx={{
        "&::after": {
          background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.main}, transparent)`,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Skeleton>
  );
}
