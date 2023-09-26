import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${process.env.REACT_APP_SERVER_URL}/assets/advert.jpg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Natural Juice</Typography>
        <Typography color={medium}>springwater.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Natural juice is 100% pure juice made from the flesh of fresh Natural or from whole Natural, depending on the type used. It is not permitted to add sugars, sweeteners, preservatives, flavourings or colourings to Natural juice.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;