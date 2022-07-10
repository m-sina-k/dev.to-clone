import React from "react";
import styled from "styled-components";

interface DdProps {
  children: React.ReactNode;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
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
  min-width: 250px;
  overflow: hidden;

  .dd_list {
    cursor: default;
    padding: 0.5rem;
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
  children,
}) => {
  
  return (
    <DropdownStyle top={top} left={left} bottom={bottom} right={right} >
      <ul className="dd_list">
        {children}
      </ul>
    </DropdownStyle>
  );
};

export default Dropdown;
