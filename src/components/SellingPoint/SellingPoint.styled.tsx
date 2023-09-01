import styled from "styled-components";

const SCSellingPoint = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  .body {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h3 {
      color: var(--light-coral);
    }

    p {
      color: var(--white);
      opacity: 0.8;
      max-width: 445px;
    }

    @media screen and (max-width: 500px) {
      gap: 8px;
    }
  }

  > svg {
    min-width: 72px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

export default SCSellingPoint;
