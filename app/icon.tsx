import IconPortfolio from "@/components/favicon/IconPortfolio";

import { ImageResponse } from "next/og";

export const size = {
  width: 24,
  height: 24,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<IconPortfolio />, {
    ...size,
  });
}
