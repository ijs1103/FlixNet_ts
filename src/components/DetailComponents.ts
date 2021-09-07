import styled from "styled-components";

const DetailComponents = {

 Container: styled.div`
height: calc(100vh - 50px);
width: 100%;
position: relative;
padding-bottom: 50px;
font-size: 1rem;

`,

 Backdrop: styled.div<{bgImage: string}>`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url(${props => props.bgImage});
background-position: center center;
background-size: cover;
filter: blur(3px);
opacity: 0.5;
z-index: 0;
`,

 Contents: styled.div`
display: flex;
margin: 0 10%;
position: relative;
z-index: 1;
flex-direction: column;
height: 100%;
overflow-y: scroll;
::-webkit-scrollbar { display: none; }
`,
TitleRate: styled.div`
  height: 20%;
`,
DataCover: styled.div`
  display: flex;
  height: 80%;
`,
Rate: styled.div`
  margin-top: 0.5rem;
  font-size: 3rem;
`,
 Cover: styled.div<{bgImage: string}>`
background-image: url(${props => props.bgImage});
background-position: center center;
background-size: cover;
height: 100%;
width: 30%;
border-radius: 5px;
`,

 Data: styled.div`
 width: 70%;
 margin-top: 1rem;
 padding-right: 3rem;
`,

 Title: styled.div`
font-size: 4rem;
margin-top: 1rem;
`,
 TabButton: styled.div<{current: boolean, blocked: boolean}>`
width: 25%;
color: ${props => (props.current ? "white" : "darkgrey")};
font-size: 1rem;
text-align: center;
text-transform: capitalize;
padding: 1rem;
border-bottom: ${props => (props.current ? "yellow" : "transparent")} solid 3px;
transition: border-bottom 0.5s ease-in-out;
pointer-events: ${props => props.blocked ? "none" : "auto"};
`,

 TabMenu: styled.div`
display: flex;
margin-top: 1rem;
`,

 ItemContainer: styled.div`
 margin-top: 2rem;
`,
Items: styled.div`
  margin-top: 2rem;
`,

 Item: styled.span`
  font-size: 1.5rem;
 `,

 Divider: styled.span`
margin: 0 20px;
`,

 Overview: styled.p`
font-size: 1.5rem;
margin-top: 2rem;
opacity: 0.7;
line-height: 1.5;
`,

 Image: styled.div<{bgUrl: string}>`
background-image: url(${props => props.bgUrl});
width: 125px;
height: 180px;
background-size: cover;
border-radius: 4px;
background-position: center center;
`,

 ImageContainer: styled.div`
margin-bottom: 5px;
position: relative;
`,

 Stitle: styled.div`
 margin-top: 0.5rem;
font-size: 1rem;
color: white;
`,

 Casts: styled.div`
margin-top: 2rem;
display: flex;
overflow-x: scroll;
overflow-y: hidden;
::-webkit-scrollbar {
height: 0.3rem;
}
::-webkit-scrollbar-track {
background-color: transparent;
}
::-webkit-scrollbar-thumb {
border-radius: 5px;
background-color: yellow;
}
`,

 Cast: styled.div`
margin-right: 1.5rem;
`,

 Cnames: styled.p`
font-size: 1.5rem;
margin-top: 2rem;
opacity: 0.7;
`,

Videos: styled.div`
`,
 Video: styled.iframe`
`,
Scontainer: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 25px;
`,
Year: styled.span`
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
`
};

export default DetailComponents;