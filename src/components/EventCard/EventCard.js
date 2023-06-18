import styled from 'styled-components';

export const S = {
  EventCard: styled.div`
    display: inline-block;
    width: 404px;
    height: 305px;
    margin-bottom: 20px;
  `,

  EventImage: styled.div`
    position: relative;
    width: 404px;
    height: 227px;
    margin-bottom: 17px;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: cover;
  `,

  EventTitle: styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
  `,

  EventDescription: styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
  `,

  Heart: styled.img`
    position: absolute;
    width: 26px;
    height: 23px;
    top: 13px;
    right: 13px;
  `,

  TokenBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    right: 13px;
    bottom: 13px;
    width: 90px;
    height: 30px;
    border-radius: 10px;
    background-color: rgba(27, 27, 27, 0.5);
  `,

  Token: styled.img`
    width: 20px;
  `,
};