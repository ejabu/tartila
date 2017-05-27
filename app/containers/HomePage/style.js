import styled from 'styled-components';

import Section from './Section';

const Eja = styled(Section)`
  text-align: center;
  color: white;
  background-color: blue;
`;

const Eja2 = styled(Section)`
  text-align: center;
  color: red;
  background-color: blue;
`;

const Header = styled.div`
  background-color: #ffffff;
  position: relative;
  box-shadow: -1px 7px 10px -8px rgba(0,0,0,0.23);
  padding: 6px;
  text-align: center;
  ${''/* font-size: 21px; */}
  ${''/* font-size: 28px; */}
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #efefef;
  color: #F53D4A;
  font-family: "AraHamah1964R";
  letter-spacing: 10px;

  ${''/* &:before {
    content: 'A';
    margin-right: 10px;
    font-family: "AysaarIcon";
  } */}
`;
const Title = styled.div`
  padding: 15px 15px;
  ${''/* text-align: left; */}
  text-align: right;
  ${''/* font-size: 37px; */}
  ${''/* font-size: 50px; */}
  font-size: 18px;
  color: #2095C2;

  &:before {
    content: 'A';
    margin-right: 10px;
    font-family: "AysaarIcon";
  }
`;

const Arabic = styled.div`
  ${''/* background-color: #bacced; */}
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  box-shadow: -1px 14px 20px -8px rgba(0,0,0,0.23);
  padding: 31px 20px;
  margin-top: 20px;
  text-align: right;
  direction: rtl;
  ${''/* font-size: 66px; */}
  ${''/* font-size: 56px; */}
  font-size: 45px;
  color: #3c3c3c;
  font-family: "Uthmanic";
`;


const Play = styled.div`
  &:before {
    content: '\uF04B';
  }
`;
const More = styled.div`
  &:before {
    content: '\uF078';
  }
`;
const Like = styled.div`
  &:before {
    content: '\uF004';
  }
`;

const Post = styled.div`
  text-align: left;
  font-family: "Roboto";
	background: #fff;
  padding: 25px 10px 3px;
  display: flex;
  border-bottom: 1px solid #efefef;

`;
const Left = styled.div`
	width: 70px;
`;
const Right = styled.div`
  width: calc(100% - 90px);
`;
const Level = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #4f4f4f;
  background-color: #4f4f4f;
  color: #4f4f4f;
  display: block;
  margin: 0 auto;
`;
const Materi = styled.div`
  color: #4f4f4f;
  color: #7B9CA8;

  display: block;
  font-weight: bold;
  line-height: 18px;
`;
const Sub = styled.div`
  line-height: 18px;
  color: #4f4f4f;
  display: block;
`;
const PostFooter = styled.div`
  display: flex;
  margin-top: 14px;
  margin-left: -10px;
  font-size: 15px;
  font-family: "FontAwesome";

  & div {
    color: #4f4f4f;
    text-align: center;
    width: 50px;
    margin-right: 20px;
    ${''/* border: 1px solid #efefef; */}
  }
  & div:hover {
    color: #F53D62;
  }
`;

const Player = styled.div`
  display: none;
`;
const s = { Player, Like, More, PostFooter, Sub, Materi, Level, Left, Right, Post, Header, Eja, Eja2, Arabic, Title, Play };
export default s;
