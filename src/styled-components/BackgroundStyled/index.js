import styled from "styled-components"

const BackgroundStyled = styled.div`
    background-color: #ffffff;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({isLoading}) => isLoading ? 3 : -1};
    width: 100%;
    height: 100vh;

    .Circle1{
        width: 900px;

        position: absolute;

        top:-480px;
        left:-480px;
        animation: appear 0.8s forwards;

        @keyframes appear{
            0%{
                top:-780px;
                left:-680px;
            }
            100%{
                top:-480px;
                left:-480px;
            }
        }
    }
    .Circle2{
        width: 500px;

        position: absolute;

        bottom:-250px;
        right:-250px;
        
        animation: appear2 0.8s forwards;
        
        @keyframes appear2{
            0%{
                bottom:-450px;
                right:-450px;
            }
            100%{
                bottom:-250px;
                right:-250px;
            }
        }
    }
`

export default BackgroundStyled