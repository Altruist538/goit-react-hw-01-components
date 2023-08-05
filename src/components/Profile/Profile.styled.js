import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: auto;
  overflow: hidden;
  width: 600px;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Topic = styled.p`
  font-size: 40px;
  text-align: center;
`;
export const ImgAvatar = styled.img`
  width: 450px;
  border-radius: 50%;
  margin: 20px;
`;
export const Text = styled.p`
  font-size: 30px;
  text-align: center;
`;

export const List = styled.ul`
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
