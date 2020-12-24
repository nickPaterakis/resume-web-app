import React from 'react';
import { BackdropContainer } from './BackdropElements'

const Backdrop = (props) => (
    props.show ? <BackdropContainer onClick={props.clicked}></BackdropContainer> : null
)

export default Backdrop;