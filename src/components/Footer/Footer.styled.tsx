import styled from "styled-components";

const SCFooter = styled.div`
  background: var(--dark-green);
  padding: 50px 165px;
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    gap: 125px;

    .logo {
      display: flex;
      flex-direction: column;
      gap: 25px;

      .links {
        display: flex;
        gap: 40px;
      }

      > svg {
        @media screen and (max-width: 1024px) {
          transform: scale(0.6);
          position: relative;
          left: -30px;
        }

        @media screen and (max-width: 500px) {
          left: 0;
        }
      }

      @media screen and (max-width: 1024px) {
        gap: 50px;
      }

      @media screen {
        gap: 25px;
        align-items: center;
      }
    }

    .location {
      color: var(--white);
      opacity: 0.6;

      p {
        @media screen and (max-width: 1024px) {
          text-align: end;
        }

        @media screen and (max-width: 500px) {
          text-align: center;
        }
      }
    }

    @media screen and (max-width: 1225px) {
      gap: 75px;
    }

    @media screen and (max-width: 1024px) {
      justify-content: space-between;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
      gap: 25px;
      align-items: center;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 50px;

    .socials {
      display: flex;
      gap: 16px;
    }

    .copyright {
      color: var(--white);
      opacity: 0.6;
    }

    @media screen and (max-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
    padding: 55px 40px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 40px;
    padding: 65px 25px;
  }
`;

export default SCFooter;
