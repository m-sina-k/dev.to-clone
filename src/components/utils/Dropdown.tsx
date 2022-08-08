import React from "react";
import styled from "styled-components";

interface DdProps {
  children: React.ReactNode;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  minWidth?: string;
  maxHeight?: string;
  p?: string;
}

const DropdownStyle = styled.div<DdProps>`
  background-color: ${({ theme }) => theme.colors.block_color};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.colors.block_boxShadow};
  position: absolute;
  top: ${({ top }) => (top ? top : null)};
  left: ${({ left }) => (left ? left : null)};
  right: ${({ right }) => (right ? right : null)};
  bottom: ${({ bottom }) => (bottom ? bottom : null)};
  width: max-content;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "250px")};
  z-index: 50;
  ${({ p }) => p && { padding: p }};
  ${({ maxHeight }) => maxHeight && { maxHeight: maxHeight }};
  overflow: auto;

  .dd_list {
    cursor: default;
    padding: 0.5rem;

    li::before {
      display: none !important;
    }
  }
`;

export const DdItem = styled.li`
  margin-bottom: 0.3rem;
`;

const Dropdown: React.FC<DdProps> = ({
  top,
  left,
  right,
  bottom,
  minWidth,
  maxHeight,
  children,
  p,
}) => {
  return (
    <DropdownStyle
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      minWidth={minWidth}
      maxHeight={maxHeight}
      p={p}
      className="dropdown"
    >
      <ul className="dd_list">{children}</ul>
    </DropdownStyle>
  );
};

export default Dropdown;
