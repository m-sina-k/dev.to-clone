const layout = {
  container_width: "1280px",
  header_height:'56px',
  global_colors: {
    primary_tint: "#3b49df33",
    primary: "#3b49df",
    primary_shade: "#2F3AB2",
    green_tint: "#05966933",
    green: "#059669",
    green_shade: "#047857",
    yellow_tint: "#f59f0b33",
    yellow: "#f59f0b",
    yellow_shade: "#d97706",
    red_tint: "#dc262633",
    red: "#dc2626",
    red_shade: "#b91c1c",
    glass_btn_hover: "#ffffff33",
  },
  spacing: {
    xxs: "0.25rem",
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xl2: "2.5rem",
    xl3: "3rem",
    page_offset_top: "4.5rem",
  },
  break_point: {
    xl: "1024px",
    lg: "768px",
    md: "640px",
  },
  font_size: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xl2: "22px",
    xl3: "24px",
  },

};

export const themes = {
  light: {
    id: "T_01",
    name: "Light",
    colors: {
      body: "#f5f5f5",
      text: "#171717",
      text_muted: "#525252",
      block_color: "#ffffff",
      footer_color: "#E5E5E5",
      border_color:'rgba(23, 23, 23, 0.2)',
      block_boxShadow:"rgba(23, 23, 23, 0.2) 0px 0px 0px 1px"
    },
    layout,
  },
  dark: {
    id: "T_02",
    name: "Dark",
    colors: {
      body: "#000000",
      text: "#FAFAFA",
      text_muted: "#bdbdbd",
      block_color: "#171717",
      footer_color:"#171717",
      border_color:"rgba(255, 255, 255, 0.15)",
      block_boxShadow:"rgba(255, 255, 255, 0.15) 0px 0px 0px 1px"
    },
    layout,
  },
};
