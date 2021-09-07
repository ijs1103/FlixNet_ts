const CalcStars = (rating: number) => {
    let star = 0;
    let result = "";
    star = Math.round(rating/2);
    if (star===0) result ="★★★★★";
    for(let i=0; i<5; i++){
        if(i<star){
            result+="⭐️";
        } else {
            result+="★";
        }
    }
    return result;
};

export default CalcStars;