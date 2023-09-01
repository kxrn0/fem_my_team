import styled from "styled-components";

const SCForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  input[type="text"],
  input[type="email"],
  textarea {
    color: var(--white);
    background: transparent;
    width: 540px;
    border: none;
    border-bottom: 1px solid var(--white);

    &:focus {
      outline: none;
      border-bottom: 1px solid var(--rapture-blue);
    }

    &::placeholder {
      color: var(--white);
      opacity: 0.6;
    }
  }

  input[type="text"],
  input[type="email"] {
    padding-bottom: 17px;
  }

  textarea {
    padding-bottom: 40px;
  }

  .error {
    display: none;

    &.active {
      display: block;
    }
  }
`;

export default SCForm;
