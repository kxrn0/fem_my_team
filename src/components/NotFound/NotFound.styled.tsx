import styled from "styled-components";

const SCNotFound = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  position: relative;
  overflow: hidden;

  .fs-h1-large {
    color: var(--white);

    .highlight {
      color: var(--light-coral);
    }
  }

  .fs-h2-small {
    color: var(--rapture-blue);
  }

  svg {
    position: absolute;

    &:first-of-type {
      top: 0;
      left: 0;

      @media screen and (max-width: 900px) {
        transform: translate(-50%);
      }

      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    &:last-of-type {
      bottom: 0;
      right: 0;
    }
  }
`;

export default SCNotFound;
