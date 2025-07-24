import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#FED500',
    colorPrimaryBg: "#fff",
    fontFamily: "'GeistSans', 'GeistSans Fallback'",
  },
  components: {
    Menu: {
      // colorBgSolidActive: "#FED500",
      // colorBgSolid: "#FED500",
      itemColor: "#3E444C",
      // itemActiveBg: "#2E2E2E",
      itemActiveBg: "rgba(254, 213, 0, 0.2)",
      itemSelectedBg: "#FED500",
      itemSelectedColor: "#2E2E2E",
      itemMarginBlock: 2,
      activeBarHeight: 6,
      // subMenuItemSelectedBg: "rgba(254, 213, 0, 0.2)",
      subMenuItemSelectedColor: "#FED500"

    },
    Input: {
      // colorTextPlaceholder: "#6B6B6B",
      // fontSizeLG: 14,
      // colorBorder: "#C4C4C4",
      controlHeightLG: 40,
      borderRadius: 5,
      controlHeight: 40,
      // borderRadiusLG:5,
      // colorBgContainer: "#F5F5F5"
    },
    InputNumber: {
      controlHeightLG: 40,
      borderRadius: 5,
      controlHeight: 40,
    },
    DatePicker: {
      controlHeightLG: 40,
      borderRadius: 5,
      controlHeight: 40,
    },
    Select: {
      // colorTextPlaceholder: "#6B6B6B",
      // colorBorder: "#C4C4C4",
      controlHeightLG: 40,
      controlHeight: 40,
      borderRadius: 5,
      // borderRadiusLG:5,
      // colorBgContainer: "#F5F5F5",
      // fontSizeLG: 14,
    },
    Form: {
      labelColor: "#191919",
      labelFontSize: 14,
    },
    Button: {
      borderRadius: 5,
      controlHeight: 50,
      defaultHoverBorderColor: "#0E0B0A"

    },
    Upload:{
      fontSize:14
    },
    Tabs: {
      itemColor: "#373737",
      fontSize: 16,
      fontWeightStrong: 700,
      colorText: "#373737",
    }   
  }
};
