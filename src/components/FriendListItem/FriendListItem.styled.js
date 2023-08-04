import styled from 'styled-components';
export const Wrapper = styled.div`
  padding: 10px;
  margin: 20px auto;
  width: 600px;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const PointSpan = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #9e9e9e;
  background-color: #9e9e9e47;
  margin: 20px;
`;
export const ImgAvatar = styled.img`
  width: 150px;
  border-radius: 10px;
  border: 1px solid #9e9e9e;
  padding: 10px;
`;
export const Text = styled.p`
  font-size: 50px;
  text-align: center;
  margin: 20px;
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
