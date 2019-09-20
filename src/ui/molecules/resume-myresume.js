import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Case } from '../../img/briefcase.svg';
import { ReactComponent as School } from '../../img/school.svg';
import { ResumeItem } from './resume-item';
const AboutMeContainer = styled.div`
    margin: 0 0 10px 0;
    position: relative;
`;

export const MyResume = props => (
    <AboutMeContainer>
        <Title>Resume</Title>
        <Row>
            <Column>
                <ColumnTiile>
                    <CaseComponent />
                    EXPERIENCE
                </ColumnTiile>
                <ResumeItem
                    active
                    last
                    data="FEB 2019 - SEP 2019"
                    name="FULL-STACK JAVASCRIPT ENGINEER"
                    company="BRANDON"
                >
                    Vanila JavaScript, Node.js
                </ResumeItem>
            </Column>

            <Column>
                <ColumnTiile>
                    <SchoolComponent />
                    EDUCATION
                </ColumnTiile>
                <ResumeItem active data="2019 - PRESENT" name="UNIVERSITY" company="IVANO-FRANKIVSK">
                    Ivano-Frankivsk National Technical University of Oil and Gas
                </ResumeItem>

                <ResumeItem last data="2015 - 2019" name="COLLEGE" company="IVANO-FRANKIVSK">
                    College of electronic devices. Computer engineering faculty
                </ResumeItem>

                <ResumeItem last data="2006 - 2015" name="SCHOOL" company="IVANO-FRANKIVSK">
                    Specialized School №1
                </ResumeItem>
            </Column>
        </Row>
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
const ColumnTiile = styled.div`
    align-items: center;
    display: flex;
    position: relative;
    letter-spacing: 0em;
    fill: #2eca7f;
    font-weight: 400;
    padding: 0 0 20px 0;
    font-size: 14px;
    &::after {
        content: '';
        position: absolute;
        left: -15px;
        bottom: 0;
        top: 48px;
        width: 100%;
        height: 1px;
        background: radial-gradient(ellipse at left, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
    }
`;
const SchoolComponent = styled(School)`
    width: 30px;
    height: 30px;
    margin: 5px;
`;
const CaseComponent = styled(Case)`
    width: 30px;
    height: 30px;
    margin: 5px;
`;

