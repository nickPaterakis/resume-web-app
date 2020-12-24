import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import {
    SpinnerContainer,
    SKCubeGrid,
    SKCube1,
    SKCube2,
    SKCube3,
    SKCube4,
    SKCube5,
    SKCube6,
    SKCube7,
    SKCube8,
    SKCube9,
} from './SpinnerElements'


const spinner = () => (
    <Aux>
        <SpinnerContainer>
            <SKCubeGrid>
                <SKCube1 />
                <SKCube2 />
                <SKCube3 />
                <SKCube4 />
                <SKCube5 />
                <SKCube6 />
                <SKCube7 />
                <SKCube8 />
                <SKCube9 />
            </SKCubeGrid>
        </SpinnerContainer>
    </Aux> 
);

export default spinner;