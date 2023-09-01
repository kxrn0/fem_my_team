import styled from "styled-components";

const SCContact = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 130px;
  padding: 50px 165px;
  padding-bottom: 130px;
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

      @media screen and (max-width: 1350px) {
        text-align: center;
        gap: 25px;
      }

      @media screen and (max-width: 650px) {
        gap: 15px;
      }
    }

    .topic-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    @media screen and (max-width: 1350px) {
      gap: 25px;
    }

    @media screen and (max-width: 650px) {
      gap: 40px;
    }
  }

  > svg {
    position: absolute;

    &:first-of-type {
      top: 0;
      left: 0;
      transform: translate(-50%);

      @media screen and (max-width: 650px) {
        display: none;
      }
    }

    &:last-of-type {
      bottom: 0;
      right: 0;
      transform: translate(50%);

      @media screen and (max-width: 650px) {
        transform: translate(50%, 50%);
      }
    }
  }

  @media screen and (max-width: 1350px) {
    flex-direction: column;
    align-items: center;
    padding: 50px 0 110px 0;
    gap: 65px;
  }

  @media screen and (max-width: 650px) {
    padding: 90px 25px;
    gap: 55px;
  }
`;

export default SCContact;
