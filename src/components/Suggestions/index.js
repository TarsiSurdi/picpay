import React from 'react';

import {
    Container,
    Option,
    Img,
    Label,
} from './styles';

import img1 from '../../images/01.png';

export default function Suggestions() {
    return(
        <Container horizontal>
            <Option>
                <Img source={img1} />
                <Label>Doações</Label>
            </Option>
        </Container>
    );
}