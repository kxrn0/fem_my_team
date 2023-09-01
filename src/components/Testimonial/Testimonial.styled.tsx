import styled from "styled-components";

const SCTestimonial = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  text-align: center;

  .body {
    color: var(--white);
    position: relative;

    @media screen and (max-width: 1024px) {
      max-width: 570px;
    }
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    .details {
      h3 {
        color: var(--rapture-blue);
      }

      p {
        color: var(--white);
      }
    }

    img {
      width: 62px;
      height: 62px;
      border: 2px solid var(--cawffee);
      border-radius: 100%;
    }

    @media screen and (max-width: 1024px) {
      gap: 16px;
    }
  }

  > svg {
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translate(-50%);
  }

  @media screen and (max-width: 1024px) {
    gap: 16px;
  }
`;

export default SCTestimonial;
