/* Here are the useful functions which can be reused in components and pages */

/* Format the numbers */
function numberWithCommas(x) {
  if (x === undefined) {
    return x
  }
  else return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



export default (
   numberWithCommas 
)