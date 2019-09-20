import React from 'react';
import styled from 'styled-components';
import { WorkItem } from './work-item';
import WorkPortfolioPhoto from '../../img/Work-Portfolio.png';
import WorkPortfolioPhoto2 from '../../img/WorkPortfolio2.png';
import Lenote from '../../img/Lenote.png';

const MyWorkContainer = styled.div`
    margin: 0 0 10px 0;
    position: relative;
`;

export const MyWorks = props => (
    <MyWorkContainer>
        <Title>Recent Works</Title>
        <Row>
            <Column>
                <WorkItem last name="PORTFOLIO" type="WEBSITE" image={WorkPortfolioPhoto2} />
            </Column>

            <Column>
                <WorkItem name="PORTFOLIO" type="WEBSITE" image={WorkPortfolioPhoto} />
                <WorkItem last name="Lenote" type="DYPLOMA PROJECT" image={Lenote} />
            </Column>
        </Row>
    </MyWorkContainer>
);

const Title = styled.div`
    margin: 0 0 15px 20px;
    padding: 0 0 5px 0;
    position: relative;
    font-size: 17px;
    color: #171717;
    text-align: left;
    line-height: 21px;
    font-weight: 600;
    &::before {
        content: '';
        position: absolute;
        left: -12px;
        top: 0;
        width: 30px;
        height: 30px;
        z-index: 1;
        border-radius: 30px;
        background: linear-gradient(135deg, rgba(46, 202, 127, 0.4) 0%, rgba(46, 202, 127, 0.01) 100%);
    }
    &::after {
        content: '';
        position: absolute;
        left: -40px;
        bottom: -15px;
        width: 95%;
        height: 1px;

        background: radial-gradient(ellipse at left, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
    }
`;
const Row = styled.div`
    display: flex;
`;

const Column = styled.div`
    padding: 8px 15px;
    position: relative;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    width: 50%;
    box-sizing: border-box;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background: radial-gradient(ellipse at top, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
    }
`;

