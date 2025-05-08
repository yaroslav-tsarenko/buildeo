import React from 'react';
import { Tooltip, TooltipProps, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: '0.875rem',
        boxShadow: theme.shadows[1],
    },
}));

export default CustomTooltip;