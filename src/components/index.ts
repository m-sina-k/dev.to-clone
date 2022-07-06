import styled from "styled-components";
import { Link } from "react-router-dom";

interface ContainerProps {
  pageContainer?: boolean;
}

interface RowProps {
  ai?: string;
  jc?: string;
}

interface ButtonProps {
  p?: string;
  m?: string;
  onClick?: (e?:Event) => any;
}

interface StyledLinkProps {
  active?: boolean;
  p?: string;
  m?: string;
}

export const Container = styled.div<ContainerProps>`
  padding: 0 ${({ theme }) => theme.layout.spacing.md};
  max-width: ${({ theme }) => theme.layout.container_width};
  margin: 0 auto;
  margin-top: ${(props) =>
    props.pageContainer ? props.theme.layout.spacing.page_offset_top : 0};
  width: 100%;

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.md}) {
    padding: 0 ${({ theme }) => theme.layout.spacing.xs};
  }
`;

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: ${(props) => props.ai || "unset"};
  justify-content: ${(props) => props.jc || "unset"};
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  border-radius: 6px;
  height: 100%;
  font-size: 16px;
  transition: all 0.1s ease;
  background-color: transparent;
  ${({ m }) => (m ? { margin: m } : null)};
  ${({ p }) => (p ? { padding: p } : { padding: "0 18px" })};

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.md}) {
    font-size: ${({ theme }) => theme.layout.font_size.sm};
  }
`;

export const ButtonPrimary = styled(Button)`
  border: 1px solid ${({ theme }) => theme.layout.global_colors.primary};
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

export const StyledLink = styled(Link)<StyledLinkProps>`
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  padding: ${({ p }) => (p ? p : "8px 16px")};
  margin: ${({ m }) => (m ? m : null)};
  background-color: ${(props) =>
    props.active ? props.theme.colors.block_color : "transparent"};

  &:hover {
    background-color: ${(props) =>
      props.active
        ? props.theme.layout.global_colors.block_color
        : props.theme.layout.global_colors.primary_tint};
    color: ${({ theme }) => theme.layout.global_colors.primary};
  }
`;
