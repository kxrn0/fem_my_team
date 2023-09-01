import styled from "styled-components";

const SCPseudofooter = styled.div`
  background: var(--light-coral);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 260px;
  padding: 75px 260px;
  position: relative;

  h2 {
    color: var(--sacramento-state-green);
  }

  > svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media screen and (max-width: 1465px) {
    gap: 85px;
    padding: 100px;
  }

  @media screen and (max-width: 1024px) {
    padding: 90px 20px;
    gap: 85px;
  }

  @media screen and (max-width: 700px) {
    padding: 90px 25px;
    gap: 25px;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    padding: 85px 50px;;
    padding-bottom: 100px;
    text-align: center;
  }
`;

export default SCPseudofooter;
