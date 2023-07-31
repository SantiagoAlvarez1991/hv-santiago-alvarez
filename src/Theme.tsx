import { ThemeProvider } from "styled-components";



const theme  = {
    green : '#00E676',
    lightGreen: '#6ADBD8',
    blue: '#29B6F6',
    yellow: '#FFEA00',
    gray: '#B0BEC5',
    textColor : '#455A64',
    softTextColor : '#E1E1E1',
    softBackground : '#F5F6F7',
}


const Theme = ({ children } : any) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
export default Theme