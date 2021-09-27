// function buids a squad array based on fpl player data
export const loopfn = (start,end,squad,position)=>{
    for(var x=start;x < end; x++){
        squad.push(position[x])
    }
    return squad;
  }

  export const highestFirst = (start,end,squad,position)=>{
    for(var x=position.length -1;x >= (position.length) - end; x--){
        squad.push(position[x])
    }
    return squad;
  }

//function sorts top player positions based on price (lowest to highest)
export const sortfn = (arr,type)=>{
    var x = []
    x = arr;
    x.sort(function (a, b) {
      return a.now_cost - b.now_cost;
    });
    return x;
  }
