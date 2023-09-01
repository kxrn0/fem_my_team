import styled from "styled-components";

const SCAbout = styled.div`
  .hero {
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 220px;
    padding: 45px 165px;
    padding-bottom: 120px;
    overflow: hidden;

    .hero-message {
      display: flex;
      flex-direction: column;
      gap: 40px;
      max-width: 730px;

      .line {
        --bg: var(--light-coral);

        @media screen and (max-width: 1200px) {
          display: none;
        }
      }
    }

    svg {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(50%);

      @media screen and (max-width: 630px) {
        transform: translate(50%, 50%);
      }
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      gap: 25px;
      padding: 50px 155px;
      padding-bottom: 110px;
      text-align: center;
    }

    @media screen and (max-width: 630px) {
      padding: 30px 25px;
      padding-bottom: 110px;
    }
  }

  .directors {
    background: var(--deep-jungle-green);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 65px;
    padding: 140px 165px;
    padding-bottom: 170px;
    position: relative;
    overflow: hidden;

    .directors-title {
      color: var(--white);
    }

    .director-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 75px;
      column-gap: 30px;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
      }

      @media screen and (max-width: 650px) {
        display: flex;
        flex-direction: column;
        gap: 50px;
      }
    }

    > svg {
      position: absolute;

      &:first-of-type {
        top: 0;
        left: 0;
        transform: translate(-50%);

        @media screen and (max-width: 650px) {
          transform: translate(-50%, -50%);
        }
      }

      &:last-of-type {
        bottom: 0;
        right: 0;
      }
    }

    @media screen and (max-width: 1024px) {
      gap: 50px;
    }

    @media screen and (max-width: 650px) {
      padding: 90px 25px;
      padding-bottom: 120px;
    }
  }

  .clients {
    background: var(--sacramento-state-green);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
    padding: 140px 165px;
    padding-bottom: 150px;
    position: relative;
    overflow: hidden;
    text-align: center;

    .clients-title {
      color: var(--white);
    }

    .client-list {
      display: flex;
      gap: 75px;

      img {
        height: 30px;
        width: auto;

        @media screen and (max-width: 1200px) {
          height: 25px;
        }

        @media screen and (max-width: 860px) {
          height: 20px;
        }

        @media screen and (max-width: 710px) {
          height: auto;
          width: 150px;
        }
      }

      @media screen and (max-width: 1200px) {
        gap: 50px;
      }

      @media screen and (max-width: 960px) {
        gap: 30px;
      }

      @media screen and (max-width: 710px) {
        flex-direction: column;
        align-items: center;
        gap: 55px;
      }
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;

      @media screen and (max-width: 1200px) {
        transform: translateY(-50%);
      }

      @media screen and (max-width: 650px){
        transform: translate(-50%, -50%);
      }
    }

    @media screen and (max-width: 1200px) {
      gap: 50px;
      padding: 100px 50px;
      padding-bottom: 110px;
    }

    @media screen and (max-width: 710px) {
      padding: 90px 25px;
      gap: 65px;
    }
  }
`;

export default SCAbout;
