import styled from 'styled-components';
export const Wrapper = styled.table`
  margin: 20px auto;
  width: 600px;
  border: 1px solid #9e9e9e;

  text-align: center;
`;

export const Topic = styled.tr`
  height: 40px;
  width: 100%;
  font-size: 20px;
  border: 1px solid #9e9e9e;
  background-color: #18cff0;
  color: #fff;
  text-transform: uppercase;
`;

export const Text = styled.tr`
  font-size: 20px;
  text-align: center;
  margin: 20px;
  border: 1px solid #9e9e9e;
  padding: 5px;
  height: 40px;
`;

export const List = styled.ul`
  border: 1px solid #9e9e9e;
  border-radius: 0 0 10px 10px;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
`;
export const ListLi = styled.li`
  font-size: 30px;
  padding: 40px 0;
  width: 100%;
  background-color: #9e9e9e47;
  border: 1px solid #9e9e9e;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;
