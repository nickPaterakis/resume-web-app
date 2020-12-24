import styled from 'styled-components';

export const SpinnerContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.295);
    z-index: 100;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SKCubeGrid = styled.div`
    width: 40px;
    height: 40px;
    margin: 100px auto;
    position: fixed;
    top: 30%;


    @-webkit-keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1); 
    }
  }
  
  @keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    } 
  }
`;

export const SKCube = styled.div`
     width: 33%;
    height: 33%;
    background-color: #333;
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; 
`;

export const SKCube1 = styled(SKCube)`
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
`;

export const SKCube2 = styled(SKCube)`
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
`;


export const SKCube3 = styled(SKCube)`
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
`;

export const SKCube4 = styled(SKCube)`
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
`;

export const SKCube5 = styled(SKCube)`
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
`;

export const SKCube6 = styled(SKCube)`
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
`;

export const SKCube7 = styled(SKCube)`
    -webkit-animation-delay: 0s;
            animation-delay: 0s;
`;

export const SKCube8 = styled(SKCube)`
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
`;

export const SKCube9 = styled(SKCube)`
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
`;


