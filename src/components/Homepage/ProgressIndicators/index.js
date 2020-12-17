import { useState, useEffect } from "react";
import styled from "@emotion/styled"; 

const Table = styled.table`
    position: absolute; 
    top: 100px; 
    left: 10px;
    z-index: 100;

    tr{
        td:first-child{
            text-transform: uppercase;
            font-weight: 700;
        }
    }
`;

const ProgressIndicators = ({ yVal, progress, duration, startPos, endPos}) => {

    return(
        <Table>
            <tbody>
                <tr>
                    <td>Progress</td>
                    <td>{progress}</td>
                </tr>
                <tr>
                    <td>Page Progress</td>
                    <td>{yVal}</td>
                </tr>
                <tr>
                    <td>Scene Progress</td>
                    <td>{Math.round(progress * duration)}</td>
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
                    <td>{endPos}</td>
                </tr>
            </tbody>
        </Table>
    )
}

ProgressIndicators.defaultProps = {
    progress: 0, 
    startPos: 0, 
    duration: 0
};


export default ProgressIndicators;