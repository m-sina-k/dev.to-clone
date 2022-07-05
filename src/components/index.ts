import styled from "styled-components";

interface RowProps {
  jc?: string;
  ai?: string;
}

interface ButtonProps {
  m?: string;
  p?: string;
}

export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.layout.spacing.md};
  max-width: ${({ theme }) => theme.layout.container_width};
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

export const ButtonSecodary = styled(Button)`
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    fill: ${({ theme }) => theme.layout.global_colors.primary};
    background-color: ${({ theme }) => theme.layout.global_colors.primary_tint};
    color: ${({ theme }) => theme.layout.global_colors.primary};
  }
`;
