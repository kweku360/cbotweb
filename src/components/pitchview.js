import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import image from '../assets/pitch.png';
import jersey from '../assets/jersey.png';

const playerNameStyle = css`
text-align:center;
    background-color: #00763b;
    color: white;
    font-size: 12px;
    font-weight: lighter;
`;
const predictionStyle = css`
text-align:center;
background-color: #00ff87;
color: black;
font-size: 12px;
font-weight: lighter;
`;
const PitchView = ({ squad, formation }) => {
    console.log(squad)
    let dc = 0;
    let mc = 0;
    let sc = 0;
    const marginCalc = (formCount, posCount) => {

        let l = ((550 / formCount) - 70) / 2;
        let k = ((550 / formCount) * (posCount - 1)) + l;
        return k;
        //  if(posCount - 1 == 0){
        //      return l;
        //  }else{
        //     let k = ((500 / formCount) * (posCount-1)) +l;
        //      return k;
        //  }
    }

    return (
        <div>
            <div css={css`float: left; position: relative;`}>
                <img css={css``} src={image} width="550" height="450" />
                {
                    squad.map((item) => {
                        let playername = item.playername.split(" ");
                        playername = playername[playername.length - 1]

                        if (item.element_type == 1) {
                            return (<div css={css`position: absolute; top: 0; left: 0;margin-left: 235px;`}>
                                <img src={jersey} width="60" height="60" />
                                <div css={playerNameStyle}><b>{playername}</b></div>
                                <div css={predictionStyle}><b>{item.preds}</b></div>
                            </div>)
                        }
                        if (item.element_type == 2) {
                            dc = dc + 1;
                            return (<div css={css`position: absolute; top: 0; left: 0;
                               margin-top: 100px; margin-left: ${marginCalc(formation[0], dc)}px;`}>
                                <img src={jersey} width="60" height="60" />
                                <div css={playerNameStyle}><b>{playername}</b></div>
                                <div css={predictionStyle}><b>{item.preds}</b></div>
                            </div>)
                        }
                        if (item.element_type == 3) {
                            mc = mc + 1;
                            return (<div css={css`position: absolute; top: 0; left: 0;
                                margin-top: 220px; margin-left: ${marginCalc(formation[1], mc)}px;`}>
                                <img src={jersey} width="60" height="60" />
                                <div css={playerNameStyle}><b>{playername}</b></div>
                                <div css={predictionStyle}><b>{item.preds}</b></div>
                            </div>)
                        }
                        if (item.element_type == 4) {
                            sc = sc + 1;
                            return (<div css={css`position: absolute; top: 0; left: 0;
                                margin-top: 330px; margin-left: ${marginCalc(formation[2], sc)}px;`}>
                                <img src={jersey} width="60" height="60" />
                                <div css={playerNameStyle}><b>{playername}</b></div>
                                <div css={predictionStyle}><b>{item.preds}</b></div>
                            </div>)
                        }
                    })
                }
            </div>
        </div>
    );
};


export default PitchView;