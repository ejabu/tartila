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
const Icon = styled.div`
  color: blue;
  cursor: pointer;
  display: inline-block;
  font-family: "AysaarIcon";
`;
const Title = styled.div`
  padding: 15px 15px;
  text-align: left;
  font-size: 18px;
  color: #5FAA3E;

  &:before {
    content: 'A';
    margin-right: 10px;
    font-family: "AysaarIcon";
  }
`;

const Arabic = styled.div`
  padding: 15px 15px;
  text-align: right;
  direction: rtl;
  font-size: 52px;
  color: #3c3c3c;
  font-family: "Uthmanic";
`;



const s = {Eja, Eja2, Arabic, Title}
export default s;
