import styled, { keyframes } from 'styled-components'
// import {Theme} from "../../Utils/Constants";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid coral;
  border-right: 2px solid coral;
  border-bottom: 2px solid coral;
  border-left: 4px solid #EE7C27;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin: 10rem auto;
  
`;
function Loading() {
    return(
        <Spinner/>
    )
}


export default Loading;