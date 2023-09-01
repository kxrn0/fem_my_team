import styled from "styled-components";

const SCContact = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 130px;
  position: relative;
  overflow: hidden;

  .hero {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .intro {
      display: flex;
      flex-direction: column;
      gap: 15px;

      h1 {
        color: var(--white);
      }

      h2 {
        color: var(--light-coral);
      }
    }

    .topic-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  > svg {
    position: absolute;

    &:first-of-type {
      top: 0;
      left: 0;
      transform: translate(-50%);
    }

    &:last-of-type {
      bottom: 0;
      right: 0;
      transform: translate(50%);
    }
  }
`;

export default SCContact;
