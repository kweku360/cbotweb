import {sortfn} from "./predictorutils"
import highestTeam from "./strategy/highestteam"
import cheapestTeam from "./strategy/cheapestteam"

const main = (formation,strategy,data) => {
  console.log(strategy);
    var defenderArr = []
    var goalkeeperArr = []
    var midfielderArr = []
    var attackArr = []
    var finalsquad = []
 
    //sort cost
    var numArray = [];

    data.map((item) => {
      if(item.element_type == 1){
        goalkeeperArr.push(item);
      }
      if(item.element_type == 2){
        defenderArr.push(item);
      }
      if(item.element_type == 3){
        midfielderArr.push(item);
      }
      if(item.element_type == 4){
        attackArr.push(item);
      }
    }
    )
    goalkeeperArr = sortfn(goalkeeperArr,"");
    defenderArr = sortfn(defenderArr,"");
    midfielderArr = sortfn(midfielderArr,"");
    attackArr = sortfn(attackArr,"");
if(strategy == "cheapest")
    finalsquad = cheapestTeam(finalsquad,formation,goalkeeperArr,defenderArr,midfielderArr,attackArr)
if(strategy == "highest")
  finalsquad = highestTeam(finalsquad,formation,goalkeeperArr,defenderArr,midfielderArr,attackArr)
    // console.log(finalsquad)

    //calculate total price
    var totprice = 0
    finalsquad.map((item)=>{ totprice = totprice + ( item.now_cost/10 ) })
    // console.log(totprice);

    //calculate total points
    var totpoints = 0
    finalsquad.map((item)=>{ totpoints = totpoints + ( item.preds) })
    // console.log(totpoints);

    return finalsquad;

    // if(totprice < 95){
    //   finalsquad = []
    //   //lets inplement priority model
    // //we loop keepers
    // finalsquad = priorityStrategy(0,1,finalsquad,goalkeeperArr,1,1)
    // //we loop defenders
    // finalsquad = priorityStrategy(0,formation[0],finalsquad,defenderArr,1,1)

    // //then we loop midfielders
    // finalsquad = priorityStrategy(0,formation[1],finalsquad,midfielderArr,3,1)
    // //loop attackers
    // finalsquad = priorityStrategy(0,formation[2],finalsquad,attackArr,1,1)

    // console.log(finalsquad)

    // var totprice = 0
    // finalsquad.map((item)=>{ totprice = totprice + ( item.now_cost/10 ) })
    // console.log(totprice);
    // }
  }


//   const priorityStrategy = (start,end,finalsquad,position,level,increment)=>{
//     if(position[0].element_type == level && increment < 3){
//       console.log("here");
//       for(var x=start+increment;x < end+increment; x++){
//         finalsquad.push(position[x])
//       }
//     }else {
//       for(var x=start;x < end; x++){
//         finalsquad.push(position[x])
//       }
//     }
 
//     return finalsquad;
//   }


export default main;
