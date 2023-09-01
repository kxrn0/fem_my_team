import styled from "styled-components";

const SCProfile = styled.div`
  perspective: 1000px;

  .content {
    position: relative;
    width: 350px;
    height: 255px;
    transition: transform 0.33s;
    transform-style: preserve-3d;

    button {
      position: absolute;
      bottom: 0;
      transform: translate(0, 50%);
      width: 56px;
      height: 56px;
      border: none;
      border-radius: 100%;
    }

    .front,
    .back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
    }

    .front {
      background: var(--sacramento-state-green);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px;
      padding-bottom: 55px;
      gap: 16px;
      position: relative;
      height: 100%;
      text-align: center;

      .details {
        h3 {
          color: var(--rapture-blue);
        }

        p {
          color: var(--white);
        }
      }

      img {
        width: 96px;
        height: 96px;
        border-radius: 100%;
        border: 2px solid var(--cawffee);
      }

      button {
        background: var(--light-coral);
        transition: background-color 0.33s;

        @media (hover: hover) {
          &:hover {
            background: var(--rapture-blue);
          }
        }
      }
    }

    .back {
      background: var(--dark-green);
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      text-align: center;
      padding: 35px 50px;

      .details {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h3 {
          color: var(--rapture-blue);
        }

        p {
          color: var(--white);
        }
      }

      .socials {
        display: flex;
        gap: 25px;
      }

      button {
        background: var(--rapture-blue);
        transition: background-color 0.33s;

        svg {
          transform: rotate(45deg);
        }

        @media (hover: hover) {
          &:hover {
            background: var(--light-coral);
          }
        }
      }

      @media screen and (max-width: 1200px) {
        padding: 35px 25px;
      }
    }

    &.flipped {
      transform: rotateY(180deg);
    }

    @media screen and (max-width: 1200px) {
      width: 280px;
      height: 250px;
    }

    @media screen and (max-width: 650px) {
      width: 330px;
      height: 255px;
    }
  }
`;

export default SCProfile;
