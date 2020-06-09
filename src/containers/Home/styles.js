import styled from 'styled-components'
import media from 'styled-media-query'

export const MainWrapper = styled.section`
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    grid-auto-rows: 1fr;
    padding: 4em;

    &:before {
        content: '';
        width: 0;
        padding-bottom: 100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }

    & > *:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }
`

export const Card = styled.section`
    align-items: center;
    border: 2px dashed #d9dfe6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.2em;
    transition: all .2s;
    cursor: pointer;

    &.card-contact {
        align-items: flex-start;
        background: #ffffff;
        border: none;
        justify-content: space-between;
        padding: 1.2em;
        word-break: break-word;

        /* &:hover {
            background: #49aa98;
        } */
    }

    &:hover {
        transform: scale(1.04);
        -webkit-box-shadow: 0px 0px 15px 0px rgba(184,184,184,0.3);
        -moz-box-shadow: 0px 0px 15px 0px rgba(184,184,184,0.3);
        box-shadow: 0px 0px 15px 0px rgba(184,184,184,0.3);
    }
`

export const CardTitle = styled.p`
    color: #49aa98;
    font-weight: 500;
    font-size: 13px;
    margin-top: 1.5em;
`

export const CardButton = styled.a`
    border-radius: 5px;
    border: 1px solid #49aa98;
    color: #49aa98;
    font-size: 14px;
    padding: .8em;
    text-align: center;
    width: 100%;

    &:hover {
        background: #49aa98;
        color: #fff;
    }
`

export const CardDesc = styled.section`
    font-size: 13px;
`