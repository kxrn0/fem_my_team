import styled from "styled-components";

const SCNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 75px 165px;
  z-index: 1;

  .toggle-container {
    position: fixed;
    top: 55px;
    right: 25px;
    position: fixed;
    display: none;

    input[type="checkbox"] {
      appearance: none;
      position: absolute;
      inset: 0;
    }

    @media screen and (max-width: 625px) {
      display: block;
    }
  }

  .backdrop {
    background: black;
    opacity: 0;
    position: fixed;
    inset: 0;
    pointer-events: none;
    transition: opacity 0.33s;

    &.active {
      opacity: 0.5;
      pointer-events: all;
    }
  }

  .links {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .base-links {
      display: flex;
      gap: 40px;

      @media screen and (max-width: 625px) {
        flex-direction: column;
        gap: 25px;
        position: relative;
      }
    }

    > svg {
      display: none;

      @media screen and (max-width: 625px) {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(50%);
      }
    }

    @media screen and (max-width: 625px) {
      background: var(--police-blue);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 35px;
      padding: 110px 50px;
      transform: translate(100%);

      &:not(.not-mounted) {
        animation: hide 0.33s forwards;
      }

      &.open {
        animation: show 0.33s forwards;
      }

      @keyframes hide {
        from {
          transform: translate(0);
          visibility: visible;
        }
        to {
          transform: translate(100%);
          visibility: hidden;
        }
      }

      @keyframes show {
        from {
          transform: translate(100%);
          visibility: hidden;
        }
        to {
          transform: translate(0);
          visibility: visible;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 65px 40px;
    gap: 50px;

    > svg {
      transform: scale(0.8);
    }
  }

  @media screen and (max-width: 625px) {
    justify-content: flex-start;
    padding: 50px 25px;
  }
`;

export default SCNavbar;
