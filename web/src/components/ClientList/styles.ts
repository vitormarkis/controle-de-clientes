import styled from "styled-components"

export const Container = styled.table`
  border-collapse: collapse;
  border: 1px solid #fff;

  tr {
    height: 100%;

    td {
      height: 100%;
    }
  }

  td,
  th {
    border: 1px solid #fff;
    padding: 1rem;
    font-size: 3rem;
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
