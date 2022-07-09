import styled from "styled-components";

interface ButtonProps {
    p?: string;
    m?: string;
    isActive?: boolean;
    onClick?: (e?: Event) => any;
  }

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  border-radius: 6px;
  height: 100%;
  font-size: 16px;
  transition: all 0.1s ease;
  background-color: transparent;
  ${({ m }) => (m ? { margin: m } : null)};
  ${({ p }) => (p ? { padding: p } : { padding: "6px 16px" })};

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.md}) {
    font-size: ${({ theme }) => theme.layout.font_size.sm};
  }
`;

export const ButtonPrimary = styled(Button)`
  border: 1px solid ${({ theme }) => theme.layout.global_colors.primary} !important;
  color: ${({ theme }) => theme.layout.global_colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.layout.global_colors.primary};
    color: white;
  }
`;

export const ButtonSecondary = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  fill: ${({ theme }) => theme.colors.text};

  &:hover {
    fill: ${({ theme }) => theme.layout.global_colors.primary};
    background-color: ${({ theme }) => theme.layout.global_colors.primary_tint};
    color: ${({ theme }) => theme.layout.global_colors.primary} !important;
  }
`;

export const ButtonTertiary = styled(Button)`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.text : theme.colors.tex_muted};
  fill: ${({ isActive, theme }) =>
    isActive ? theme.colors.text : theme.colors.tex_muted};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};

  &:hover {
    fill: ${({ theme }) => theme.layout.global_colors.primary};
    color: ${({ theme }) => theme.layout.global_colors.primary} !important;
    background-color: ${({ theme }) => theme.colors.block_color};
  }
`;
