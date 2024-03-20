import { COLORS } from "helpers/constants";

const { MAIN_MAROON, GRAY_100, GRAY_200, GRAY_300, GRAY, DARK_GRAY } = COLORS;

export const antTheme = {
  components: {
    Button: {
      colorPrimary: MAIN_MAROON,
      colorPrimaryHover: GRAY_100,
      colorPrimaryActive: GRAY_200,
      colorBgContainerDisabled: GRAY_300,
      colorTextDisabled: DARK_GRAY,
      borderRadius: 32,
      controlHeight: 40,
      fontWeight: 500,
    },
    Checkbox: {
      colorPrimary: MAIN_MAROON,
      colorBorder: GRAY_300,
      colorPrimaryHover: GRAY,
    },
    Radio: {
      colorPrimary: MAIN_MAROON,
      colorBorder: GRAY_300,
      colorPrimaryHover: GRAY,
    },
    Breadcrumb: {
      itemColor: GRAY_300,
      colorText: DARK_GRAY,
    },
    Pagination: {
      colorPrimary: MAIN_MAROON,
      colorPrimaryHover: GRAY_300,
      colorBgTextHover: GRAY_100,
    },
    Input: {
      colorBorder: GRAY_300,
      colorPrimaryHover: GRAY,
      colorPrimary: MAIN_MAROON,
      controlHeight: 40,
      inputFontSize: 12,
    },
    Typography: {
      colorText: DARK_GRAY,
      colorTextHeading: DARK_GRAY,
    },
    Form: {
      labelFontSize: 12,
      itemMarginBottom: 16,
      fontSize: 12,
    },
    Layout: {
      headerBg: "transparent",
      bodyBg: "transparent",
      headerPadding: 0,
    },
    Menu: {
      colorBgContainer: "transparent",
      colorSplit: "none",
      horizontalItemSelectedColor: GRAY_300,
      horizontalItemSelectedBg: GRAY_100,
      horizontalItemHoverBg: GRAY_100,
      controlHeightLG: 40,
      itemHoverBg: GRAY_100,
      itemSelectedColor: DARK_GRAY,
      itemSelectedBg: GRAY_100,
      itemActiveBg: GRAY_100,
    },
    Select: {
      colorBorder: DARK_GRAY,
      colorPrimaryHover: GRAY_300,
      colorPrimary: MAIN_MAROON,
      controlHeight: 40,
      inputFontSize: 12,
    },
    Spin: {
      colorPrimary: MAIN_MAROON,
    },
    Tooltip: {
      colorBgSpotlight: GRAY_300,
    },
    Divider: {
      colorSplit: GRAY_300,
    },
    Table: {
      headerBg: "#F1F5F9",
      headerBorderRadius: 1,
      borderColor: "#F0F0F0",
      headerSortHoverBg: "#e7ebf1",
      bodySortBg: "#f5f9fd",
      headerSortActiveBg: "#e3e8ed",
    },
  },
  token: {
    colorError: "#cf000f",
    colorErrorBorder: "#F3BFC3",
    colorSuccess: "#5aca75",
    colorPrimary: MAIN_MAROON,
    borderRadius: 4,
    fontFamily: "Arial",
    fontSize: 20,
    fontSizeLG: 20,
    fontSizeSM: 15,
    lineHeight: 1.3,
    lineHeightHeading1: 1.3,
    fontSizeHeading1: 32,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    lineHeightHeading3: 1.3,
  },
};
