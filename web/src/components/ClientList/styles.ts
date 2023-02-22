import styled from "styled-components"

export const Table = styled.table`
  border-spacing: 2rem;

  td {
    border-radius: 2rem;
    padding: 1rem 2rem;
    white-space: nowrap;
  }

  thead > tr {
    
    & > th {
      border-radius: 1rem;
      background-color: #ffffff;
      font-weight: 400;
      color: black;
    padding: 2rem 4rem;
    }
  }

  th {
    white-space: nowrap;
  }

  tr {
    background-color: #ffffff20;
    &:nth-of-type(odd) {
      background-color: #ffffff30;
    }

    > td:nth-of-type(1),
    > td:nth-of-type(6),
    > td:nth-of-type(7) {
      text-align: center;
    }
  }

  td,
  th {
    font-size: 3.5rem;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .icon {
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 1rem;
  }

  .icon.edit {
    background-color: #1768ac;
  }
  .icon.delete {
    background-color: #d62828;
  }
`
