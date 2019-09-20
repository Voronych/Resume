import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
    margin: 0 0 60px 0;
    position: relative;
`;

export const AboutMe = props => (
    <AboutMeContainer>
        <Title>About Me</Title>
        <Row>
            I am Nazar Voronych, JS developer from Ukraine, able to work at long term projects. Passionate about solving
            problems, especially in an elegant and sustainable manner. Love learning about anything, especially things
            that make me better in his field. I am learning quickly and with pleasure.
        </Row>
        <Table>
            <Element>
                <Strong>Age . . . . . </Strong>
                19
            </Element>
            <Element>
                <Strong>Residence . . . . . </Strong>
                Ukraine
            </Element>
            <Element>
                <Strong>English . . . . . </Strong>
                Intemediate
            </Element>
            <Element>
                <Strong>Address . . . . . </Strong>
                Ivano-Frankivsk
            </Element>
        </Table>
    </AboutMeContainer>
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
    padding: 20px;
    position: relative;
    width: 99%;
    height: auto;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    font-size: 14px;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background: -moz-radial-gradient(top, ellipse cover, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
        background: -webkit-radial-gradient(
            top,
            ellipse cover,
            rgba(197, 202, 213, 0.7) 0%,
            rgba(255, 255, 255, 0) 70%
        );
        background: radial-gradient(ellipse at top, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
    }
`;

const Table = styled.ul`
    font-size: 14px;
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: left;
    padding-left: 22px;
`;
const Element = styled.li`
    display: inline-block;
    width: 48%;
    font-size: 14px;
    line-height: 1.6;
`;
const Strong = styled.strong`
    font-weight: 600;
`;

