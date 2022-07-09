import styled from "styled-components";
import { Link } from "react-router-dom";

interface ContainerProps {
  pageContainer?: boolean;
}

interface RowProps {
  ai?: string;
  jc?: string;
}

interface StyledLinkProps {
  active?: boolean;
  p?: string;
  m?: string;
}

interface BlockProps {
  p?: string;
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

export const Block = styled.div<BlockProps>`
  background-color: ${({ theme }) => theme.colors.block_color};
  box-shadow: ${({ theme }) => theme.colors.block_boxShadow};
  border-radius: 6px;
  padding: ${({ p }) => (p ? p : null)};
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

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.block_color};
  box-shadow: ${({ theme }) => theme.colors.block_boxShadow};
  padding: 10px;
  border: 2px solid transparent;

  &:focus {
    border: 2px solid royalblue;
  }
`;
