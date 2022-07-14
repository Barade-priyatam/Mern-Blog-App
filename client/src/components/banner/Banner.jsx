
import { styled, Box, Typography } from '@mui/material';


const Image = styled(Box)`
    width: 100%;
    background: url(https://images.unsplash.com/photo-1446034295857-c39f8844fad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center/55% no-repeat #000;
    ${'' /* background: url(https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80) center/55% no-repeat #000; */}
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
    
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    padding: 0 5px 0 5px;
    color: gray;
    background: #FFFFFF;
    opacity: 0.85;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOGIFY</Heading>
            <SubHeading>Share Your Thoughts</SubHeading>
        </Image>
    )
}

export default Banner;