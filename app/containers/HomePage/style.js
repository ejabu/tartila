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
  padding: 10px 0px 15px;
  text-align: left;
  ${''/* font-size: 28px; */}
  font-size: 21px;
  border-bottom: 1px solid #efefef;
  color: #1AAFD0;

  &:before {
    content: 'A';
    margin-right: 10px;
    font-family: "AysaarIcon";
  }
`;
const Title = styled.div`
  padding: 15px 15px;
  ${''/* text-align: left; */}
  text-align: right;
  ${''/* font-size: 37px; */}
  ${''/* font-size: 50px; */}
  font-size: 18px;
  color: #1AAFD0;

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
  padding: 35px 35px;
  margin-top: 20px;
  text-align: right;
  direction: rtl;
  font-size: 66px;
  font-size: 56px;
  color: #3c3c3c;
  font-family: "Uthmanic";
`;


const Play = styled.div`
  width: 100px;
	height: 100px;
	background: red;
	border-radius: 50px;
  text-align: center;
  &:before {
    color: #ffffff;
    font-weight: 100;
    font-size: 70px;
    vertical-align: middle;
    content: '\uF123';
    font-family: "EvilIcons";
  }
`;


const s = { Header, Eja, Eja2, Arabic, Title, Play };
export default s;
