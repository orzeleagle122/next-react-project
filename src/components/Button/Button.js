import React from 'react';
import {StyledButton} from './Button.elements';

const Button = ({children,to,...props}) => {
    return ( 
        <StyledButton to={to} {...props}>
            {children}
        </StyledButton>
     );
}
 
export default Button;