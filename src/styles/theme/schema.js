const layout = {
  container_width: "1280px",
  global_colors: {
    primary_tint: "#EBECFC",
    primary: "#3b49df",
    primary_shade: "#2F3AB2",
    green_tint: "rgba(5,150,105,0.2)",
    green: "#059669",
    green_shade: "#047857",
    yellow_tint: "rgba(245,105,11,0.2)",
    yellow: "#f59f0b",
    yellow_shade: "#d97706",
    red_tint: "rgba(220, 38, 38,0.2)",
    red: "#dc2626",
    red_shade: "#b91c1c",
    glass_btn_hover: "rgba(255,255,255,0.2)",
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
      text_muted: "#2F3AB2",
      block_color: "#ffffff",
      border_color: "#bdbdbd",
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
      border_color: "#bdbdbd",
    },
    layout,
  },
};
