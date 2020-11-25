import styled from "@emotion/styled"; 

const Table = styled.table`
    position: absolute; 
    top: 100px; 
    left: 10px;
    z-index: 10;

    tr{
        td:first-child{
            text-transform: uppercase;
            font-weight: 700;
        }
    }
`;

const ProgressIndicators = ({ progress, startPos, duration}) => {
    return(
        <Table>
            <tbody>
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
            </tbody>
        </Table>
    )
}

export default ProgressIndicators;