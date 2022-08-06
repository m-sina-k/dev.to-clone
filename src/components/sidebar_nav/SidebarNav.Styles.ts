import styled from "styled-components";

interface SidebarNavProps {
  isActive: boolean;
}

export const SidebarNav = styled.aside<SidebarNavProps>`
  .sidebar_backdrop {
    background-color: #0909094c;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s ease;
    ${({ isActive }) =>
      isActive &&
      `
    opacity:1;
    pointer-events:all;
    `}
  }

  .sidebar_content {
    position: fixed;
    top: 0;
    right: ${({ isActive }) => (isActive ? 0 : "-310px")};
    bottom: 0;
    width: 300px;
    max-width: 95%;
    background-color: ${({ theme }) => theme.colors.block_color};
    z-index: 110;
    padding: 1rem;
    transition: right 0.3s ease;

    .sidebar_heading {
      padding: 0 6px 1rem 0;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.layout.break_point.lg}) {
    display: none;
  }
`;
