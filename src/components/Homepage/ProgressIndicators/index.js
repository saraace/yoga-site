import styled from "@emotion/styled"; 

const Table = styled.table`
    position: absolute; 
    top: 0; 
    left: 0;
`;

const ProgressIndicators = ({ progress, startPos, duration}) => {
    return(
        <Table>
            <tr>
                <td>Progress</td>
                <td>{Math.round(progress * duration) + startPos}</td>
            </tr>
            <tr>
                <td>Duration</td>
                <td>{duration}</td>
            </tr>
            <tr>
                <td>Start Pos</td>
                <td>{startPos}</td>
            </tr>
            <tr>
                <td>End Pos</td>
                <td>{startPos + duration}</td>
            </tr>
        </Table>
    )
}

export default ProgressIndicators;