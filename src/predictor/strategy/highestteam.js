
import {highestFirst,loopfn} from "../predictorutils"

const highestTeam = (finalsquad,formation,goalkeeperArr,defenderArr,midfielderArr,attackArr)=>{
    //we loop keepers
    finalsquad = loopfn(0,1,finalsquad,goalkeeperArr)
    //we loop defenders
    finalsquad = highestFirst(0,formation[0],finalsquad,defenderArr)

    //then we loop midfielders
    finalsquad = highestFirst(0,formation[1],finalsquad,midfielderArr)
    //loop attackers
    finalsquad = highestFirst(0,formation[2],finalsquad,attackArr)

    return finalsquad

}
export default highestTeam;