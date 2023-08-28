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

  .fs-h1-large {
    font-size: 100px;
    font-family: livvic-bold;
    line-height: 100px;
  }

  .fs-h1-small {
    font-size: 64px;
    font-family: livvic-bold;
    line-height: 56px;
  }

  .fs-h2 {
    font-size: 48px;
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
  }

  .fs-body-2 {
    font-size: 15px;
    font-family: livvic-semi-bold;
    line-height: 25px;
  }

  background: var(--midnight-green);
  display: flex;
  flex-direction: column;
`;

export default SCApp;
