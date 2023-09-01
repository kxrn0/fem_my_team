import { styled } from "styled-components";

const SCApp = styled.div`
  --midnight-green: #014e56;
  --light-coral: #f67e7e;
  --white: #ffffff;
  --rapture-blue: #79c8c7;
  --police-blue: #2c6269;
  --deep-jungle-green: #004047;
  --sacramento-state-green: #012f34;
  --dark-green: #002529;
  --cawffee: #c4fffe;

  .fs-h1-large {
    font-size: 100px;
    font-family: livvic-bold;
    line-height: 100px;

    &.reduced {
      @media screen and (max-width: 1024px) {
        font-size: 64px;
        line-height: 56px;
      }

      @media screen and (max-width: 500px) {
        font-size: 40px;
        line-height: 40px;
      }
    }
  }

  .fs-h1-small {
    font-size: 64px;
    font-family: livvic-bold;
    line-height: 56px;

    &.reduced {
      @media screen and (max-width: 630px) {
        font-size: 40px;
        line-height: 40px;
      }
    }
  }

  .fs-h2-large {
    font-size: 48px;
    font-family: livvic-bold;
    line-height: 48px;

    &.reduced {
      @media screen and (max-width: 1024px) {
        font-size: 32px;
        line-height: 32px;
      }
    }
  }

  .fs-h2-small {
    font-size: 32px;
    font-family: livvic-bold;
    line-height: 48px;
  }

  .fs-h3 {
    font-size: 18px;
    font-family: livvic-bold;
    line-height: 28px;
  }

  .fs-body-1 {
    font-size: 18px;
    font-family: livvic-semi-bold;
    line-height: 28px;

    &.reduced {
      font-size: 15px;
      line-height: 28px;
    }
  }

  .fs-body-2 {
    font-size: 15px;
    font-family: livvic-semi-bold;
    line-height: 25px;
  }

  .fs-body-3 {
    font-size: 15px;
    font-family: livvic-medium-italic;
    line-height: 25px;
  }

  .fs-body-4 {
    font-size: 13px;
    font-family: livvic-medium-italic;
    line-height: 18px;
  }

  .link-primary {
    color: var(--white);
    text-decoration: none;
    transition: color 0.33s;

    @media (hover: hover) {
      &:hover {
        color: var(--light-coral);
      }
    }
  }

  .social-link {
    @media (hover: hover) {
      svg {
        path {
          transition: fill 0.33s;
        }
      }

      &:hover {
        svg {
          path {
            fill: var(--light-coral);
          }
        }
      }
    }
  }

  .button-primary {
    &.light {
      --bg-hover: var(--white);
      --border-color: var(--white);
      --color: var(--white);
      --color-hover: var(--dark-green);
    }

    &.dark {
      --bg-hover: var(--sacramento-state-green);
      --border-color: var(--sacramento-state-green);
      --color: var(--sacramento-state-green);
      --color-hover: var(--white);
    }

    &:disabled {
      opacity: 0.25;
    }

    color: var(--color);
    text-decoration: none;
    padding: 10px 33px;
    border-radius: 100px;
    border: 2px solid var(--border-color);
    transition: background-color 0.33s, border-color 0.33s, color 0.33s;

    @media (hover: hover) {
      &:hover {
        background: var(--bg-hover);
        color: var(--color-hover);
      }
    }
  }

  .button-secondary {
    background: var(--white);
    color: var(--dark-green);
    padding: 10px 33px;
    border-radius: 100px;
    transition: background-color 0.33s, opacity 0.33s;
    border: none;
    width: fit-content;

    &:disabled {
      opacity: 0.5;
    }

    @media (hover: hover) {
      &:not(:disabled):hover {
        background: var(--rapture-blue);
      }
    }
  }

  background: var(--midnight-green);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default SCApp;
