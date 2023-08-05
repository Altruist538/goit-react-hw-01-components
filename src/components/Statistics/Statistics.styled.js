import styled from 'styled-components';

export const Topic = styled.h2`
  padding: 40px 0;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
color: #696f6f;
}
`;
export const Text = styled.p`
  margin: 0;
  font-size: 40px;
  text-align: center;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  object-fit: cover;
  overflow-x: auto;
`;
export const ListLi = styled.li`
  color: #fff;
  font-size: 30px;
  padding: 40px 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  margin: 20px auto;
  overflow: hidden;
  width: 600px;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
