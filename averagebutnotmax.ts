/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    
    let biggest =salary[0]
    let smaller=salary[0]
    let total=0
    for(let i = 0; i <salary.length; i++){
        
        if(salary[i]>biggest){
            biggest=salary[i]
        }
           if(salary[i]<smaller){
            smaller=salary[i]
        }
        total=salary[i]+total
        
    }
    
    return (total - (biggest+smaller))/(salary.length-2)
};