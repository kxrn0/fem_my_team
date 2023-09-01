import styled from "styled-components";

const SCHome = styled.div`
  .hero {
    display: flex;
    justify-content: center;
    gap: 150px;
    padding: 55px 165px;
    padding-bottom: 255px;
    position: relative;

    .hero-title {
      color: var(--white);
      max-width: 535px;

      .highlight {
        color: var(--light-coral);
      }
    }

    .hero-message {
      display: flex;
      flex-direction: column;
      gap: 80px;

      p {
        color: var(--white);
        width: 445px;

        @media screen and (max-width: 500px) {
          width: auto;
        }
      }

      .line {
        --bg: var(--rapture-blue);

        @media screen and (max-width: 1024px) {
          display: none;
        }
      }
      @media screen and (max-width: 1024px) {
        gap: 24px;
      }

      @media screen and (max-width: 500px) {
        gap: 18px;
      }
    }

    svg {
      position: absolute;

      &:first-of-type {
        top: 55px;
        left: 0;
        transform: translate(-50%);

        @media screen and (max-width: 1024px) {
          display: none;
        }
      }

      &:last-of-type {
        bottom: 0;
        right: 165px;

        @media screen and (max-width: 1024px) {
          right: 50%;
          transform: translate(50%);
        }
      }
    }

    @media screen and (max-width: 1300px) {
      gap: 50px;
    }

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      gap: 24px;
      padding: 40px 155px;
      padding-bottom: 255px;
      text-align: center;
    }

    @media screen and (max-width: 500px) {
      padding: 30px 25px;
      padding-bottom: 200px;
    }
  }

  .selling-points {
    background: var(--sacramento-state-green);
    display: flex;
    justify-content: center;
    gap: 125px;
    padding: 140px 165px;
    position: relative;
    overflow-x: hidden;

    .slogan {
      display: flex;
      flex-direction: column;
      gap: 55px;

      .line {
        --bg: var(--light-coral);
      }

      h2 {
        color: var(--white);
        width: 445px;

        @media screen and (max-width: 500px) {
          width: 240px;
        }
      }

      @media screen and (max-width: 1024px) {
        gap: 32px;
      }

      @media screen and (max-width: 500px) {
        align-self: flex-start;
      }
    }

    .points {
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding-top: 55px;

      @media screen and (max-width: 1024px) {
        padding: 0;
      }
    }

    > svg {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(50%);

      @media screen and (max-width: 500px) {
        top: 0;
      }
    }

    @media screen and (max-width: 1300px) {
      flex-direction: column;
      align-items: center;
      gap: 64px;
    }

    @media screen and (max-width: 1024px) {
      gap: 64px;
      padding: 100px;
    }

    @media screen and (max-width: 500px) {
      padding: 65px 25px;
      gap: 55px;
    }
  }

  .testimonials {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 90px;
    padding: 140px 165px;
    padding-bottom: 150px;

    .testes {
      display: flex;
      gap: 30px;

      @media screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 85px;
      }
    }

    h2 {
      color: var(--white);
      max-width: 930px;
      text-align: center;

      .highlight {
        color: var(--rapture-blue);
      }

      @media screen and (max-width: 1024px) {
        max-width: 490px;
      }
    }

    > svg {
      position: absolute;

      &:first-of-type {
        top: 0;
        left: 0;
      }

      &:last-of-type {
        bottom: 0;
        right: 0;
      }
    }

    @media screen and (max-width: 1024px) {
      gap: 85px;
      padding: 100px;
    }

    @media screen and (max-width: 500px) {
      padding: 140px 25px;
      padding-bottom: 165px;
    }
  }
`;

export default SCHome;
