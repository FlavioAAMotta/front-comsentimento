import styled from 'styled-components';
export const FooterContainer = styled.div`
    background-image: linear-gradient(rgb(130,118,249), rgb(196,191,236));
    padding: 70px 0;
`

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
    max-width: 1170px;
	margin:auto;
    h4{
        font-size: 18px;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 35px;
        font-weight: 500;
        position: relative;
    }
    h4::before{
	    content: '';
        position: absolute;
        left:0;
        bottom: -10px;
        background-color: rgb(5,251,188);
        height: 2px;
        box-sizing: border-box;
        width: 50px;
    }
    ul li:not(:last-child){
	    margin-bottom: 10px;
    }
    ul li a{
        font-size: 16px;
        text-transform: capitalize;
        color: #ffffff;
        text-decoration: none;
        font-weight: 300;
        color: #5c4cf7;
        display: block;
        transition: all 0.5s ease;
    }
    li a:hover{
        color: #ffffff;
        padding-left: 8px;
    }

`

export const FooterColumn = styled.div`
    width: 25%;
    padding: 0 15px;   
`
export const FooterItem = styled.ul`
    list-style: none;
`


export const SocialLinks = styled.div`
    a{
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgba(255,255,255,0.2);
        margin:0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.5s ease;
    }
    a:hover{
        color: #24262b;
        background-color: #ffffff;
    }
`