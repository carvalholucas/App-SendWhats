import styled from 'styled-components'

export const LogoWrapper = styled('div')`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4em;
`

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: calc(100% - 80px);
`

export const MenuSuspense = styled.div`
    width: 180px;
`

export const LiSuspense = styled.li`
    cursor: pointer;
    margin-bottom: .5em;
    padding: 1em;

    &:hover {
        background: #f5f5f5;
    }
`