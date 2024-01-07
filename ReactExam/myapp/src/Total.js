
//here props are DESTRUCTURED 
function Total({nums})
{
    let addition = 0
    //let nums = props.nums
    for(let i=0;i<nums.length;i++)
    { addition+=nums[i]}
    
    return(
        <p> Total = {addition}</p>
    )

}

export default Total