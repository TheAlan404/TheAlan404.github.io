import { Badge } from '@mantine/core';


export const StatusRender = ({ status }) => {
    return {
        wip: <Badge variant="light" color="yellow">Work In Progress</Badge>,
        forgor: <Badge variant="light" color="gray">forgor</Badge>
    }[status] || <></>;
};
