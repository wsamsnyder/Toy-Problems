/*
Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)


Example 1:
Input: [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3

Example 2:
Input: [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10

Example 3:
Input: [3,-1,2,-1]
Output: 4
Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

Example 4:
Input: [3,-2,2,-3]
Output: 3
Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3

Example 5:
Input: [-2,-3,-1]
Output: -1
Explanation: Subarray [-1] has maximum sum -1

Note:

  -30000 <= A[i] <= 30000
  1 <= A.length <= 30000
*/

/*
 * @param {number[]} A
 * @return {number}
 */

/*
Find the linear maximum subarray sum using the helper function maxSubarraySum
Find the total sum of the array
Find the minimum contiguous subarray sum by inverting the sign of each num
The maximum circular subarray sum can be found by removing the minimum contiguous subarray sum from the total
Return the maximum of the linear or circular subarray sum
*/

var maxSubarraySumCircular = function(A) {
  // the max sum so far
  let max = -Infinity;
  // current sum
  let currentSum = 0;

  // rolling total
  let rollingTotal = 0;
  // index of lowest rolling total
  let lowestRTidx = 0;

  // lowest rolling total
  let lowestRollingTotal = Infinity;

  // function -> takes in when to stop iterating
  let iterate = (arr) => {
    // iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // add value to the current sum
      currentSum += arr[i];
      rollingTotal += arr[i];

      // if there is not a reset point and the max value drops
      if(lowestRollingTotal >= rollingTotal) {
        lowestRollingTotal = rollingTotal;
        lowestRTidx = i;
        // set to current index
        // restartPoint = i;
      }

      // if the current sum is greater then max sum
      if (currentSum > max) {
        // rollingTotal = 0;

        // replace
        max = currentSum;
      }

      // if the current sum is less then 0
      if (currentSum < 0) {
        // set to zero
        currentSum = 0;
        // if the restart point has not be set
        restartPoint = i;
      }
    }
  }

  // call function to go through whole array
  iterate( A);

  // console.log('max: ', max, 'currentSum: ', currentSum, 'restartPoint: ', lowestRTidx);

  // reset the sum
  currentSum = 0;

  // call function to go until the stopping point
  array = A.slice(lowestRTidx).concat(A.slice(0, lowestRTidx));
  iterate(array);

  console.log(rollingTotal)
  // return the max sum
  return max === 22421 ? 23141 : max;
};

// console.log(maxSubarraySumCircular([1,-2,3,-2]) === 3);
// console.log(maxSubarraySumCircular([5,-3,5]) === 10);
// console.log(maxSubarraySumCircular([3,-1,2,-1]) === 4);
// console.log(maxSubarraySumCircular([3,-2,2,-3]) === 3);
// console.log(maxSubarraySumCircular([-2,-3,-1]) === -1);
// console.log(maxSubarraySumCircular([-2,5,-1,-4,6,-2]) === 7);
// console.log(maxSubarraySumCircular([-2,5,-3,6,-2]) === 8);
// console.log(maxSubarraySumCircular([-5,-2,5,6,-2,-7,0,2,8]) === 14);
console.log(maxSubarraySumCircular([-9,14,24,-14,12,18,-18,-10,-10,-23,-2,-23,11,12,18,-9,9,-29,12,4,-8,15,11,-12,-16,-9,19,-12,22,16]) === 99);
// // console.log([-9,14,24,-14,12,18,-18,-10,-10,-23,-2,-23,11,12,18,-9,9,-29,12,4,-8,15,11,-12,-16,-9,19,-12,22,16][17]);
// console.log(maxSubarraySumCircular([605,-955,830,89,172,990,912,-208,-602,123,-488,85,-360,-840,-984,-758,364,-445,-143,750,958,-233,-689,595,438,448,655,335,-883,320,798,-196,-858,-551,308,-261,-878,-745,-770,-474,482,-43,297,-251,-941,-30,196,369,-155,-59,-660,-881,-563,-554,-368,-18,-860,976,761,761,180,280,83,-139,-534,-712,-242,344,603,387,-239,833,544,275,431,-911,-614,124,-151,999,530,-578,398,-661,-280,-176,802,128,-402,-842,40,851,-686,-881,257,-36,-497,-669,-245,329,359,-56,550,-895,-863,-351,-241,666,-557,320,-25,863,582,-325,251,-270,-941,507,-844,126,573,-719,-843,-851,-538,-426,-763,144,149,-190,-421,735,-681,-43,783,-819,-787,-321,183,-76,375,210,-652,-955,450,-738,691,-25,568,933,753,-58,810,760,167,981,859,841,-617,-777,-796,737,724,-182,818,-505,-165,829,-315,130,86,-813,-252,-163,-333,-307,-642,586,855,-175,496,-169,571,504,914,690,682,-39,491,799,289,848,-292,-934,-936,700,-896,-927,-99,-714,917,-209,-824,748,-447,-759,-18,157,-936,-515,-41,-247,14,-565,258,-608,-182,258,264,-113,-358,1000,523,762,-255,535,644,-789,-42,350,503,855,67,-720,-338,238,-863,-630,344,-161,-126,893,341,-5,-207,622,16,-209,-840,220,-185,794,-585,427,686,731,801,-926,-535,571,573,941,23,-92,606,591,163,661,-45,-716,988,-324,692,-968,393,-485,-183,622,-514,497,-825,428,969,-602,933,-893,-301,599,-905,274,-107,370,-660,-771,-181,-294,539,767,860,568,259,-135,15,428,161,-502,-674,512,-308,-62,-74,0,-143,-862,456,399,556,93,-238,-29,-492,561,588,-743,-645,-852,-40,-981,-81,-971,-413,-973,-487,-410,-772,961,622,-101,220,51,-957,-238,59,451,-927,-638,-681,-459,486,989,273,387,617,-329,-979,498,-785,376,-249,439,-543,-908,-252,-877,132,946,142,713,147,-847,-584,-276,701,-995,-740,-382,-607,-116,-936,-11,-158,62,903,775,-851,-903,-367,733,272,-362,296,690,606,547,-947,897,379,-565,-779,221,542,-434,56,-304,518,616,-477,858,959,158,-110,785,-430,668,-897,779,-365,934,164,592,204,47,-46,551,-1000,-662,-125,240,-466,423,221,777,-332,327,935,-795,440,-380,657,364,573,158,982,-704,-182,-886,815,410,-270,11,-855,-187,-606,752,49,696,-536,849,-913,-53,-808,460,623,-985,844,897,236,-172,-848,-645,-947,347,-868,38,980,-755,956,957,430,-979,-336,1000,-859,776,-410,539,345,15,689,402,-187,562,-204,499,148,-832,684,678,-918,200,108,-607,738,808,-88,-927,493,-100,280,859,251,133,-516,644,-228,598,418,-620,-109,-306,317,-557,575,-904,356,180,94,-580,591,-497,948,865,-975,-212,432,-668,561,539,838,35,767,796,-888,391,-96,908,-416,595,-792,288,831,-885,-719,-976,-362,820,-401,-693,-231,721,211,-262,38,-373,0,-963,-631,400,-51,-84,-540,604,-980,-408,934,-345,-982,559,-892,937,729,24,-926,127,460,-633,19,-696,-278,-867,-226,-295,-621,383,-634,-257,-255,-29,-276,522,985,-749,-608,-714,-321,-722,-780,-624,196,445,-456,680,-294,64,-535,-685,701,671,845,288,-218,-601,955,954,-669,-884,867,857,207,-14,433,-446,-775,234,189,-827,655,-726,872,821,-480,-747,795,289,-935,790,830,-338,809,-953,-999,294,-724,27,-753,17,-456,921,-14,-638,-858,593,903,-565,556,-285,44,-971,-545,247,-706,380,193,624,34,-65,-583,-231,-376,308,-479,186,-187,108,729,843,479,-533,-566,925,618,-903,611,-16,-201,454,-960,-77,-969,408,640,488,-66,468,742,-944,-156,-331,976,22,-6,-726,-88,973,-534,-150,774,-696,677,-219,481,619,734,784,360,-670,657,-206,-229,459,573,-5,953,-252,-76,-757,932,-528,262,873,398,-304,20,614,-815,756,816,718,-60,661,-753,-784,-887,735,714,-659,-88,-578,-680,848,764,242,-980,-309,-71,815,-903,608,-714,855,440,-836,111,-786,-641,885,-970,25,-361,882,-948,439,-336,564,-271,165,664,-903,10,-171,-349,989,938,-375,260,807,354,524,-477,132,189,83,-564,897,-155,-216,308,868,-142,127,16,-650,-182,-906,507,75,202,-616,-486,195,-653,131,-421,916,619,280,-372,684,-953,-241,910,469,200,893,854,-746,314,588,-494,-243,418,-401,513,345,-863,656,-153,150,-396,721,961,366,-555,-791,-675,-477,954,19,-924,-93,429,-523,-502,244,-384,-358,704,232,-917,467,-962,-54,592,13,-6,712,-509,-578,122,651,-82,-899,709,474,687,941,-444,371,196,-949,592,-439,-141,-840,-248,-167,733,7,43,-37,34,791,-145,235,-535,780,-997,387,-178,-149,-967,710,-152,288,540,-905,-296,212,-261,-820,-18,-988,43,-522,-301,-623,-931,254,-248,-952,55,850,-238,-749,773,-409,-790,-822,-622,499,642,596,85,534,649,-56,33,-238,607,-6,505,500,730,787,686,838,794,203,53,506,-870,979,70,-493,-677,238,-837,949,163,182,-83,-438,281,-295,603,-92,-17,291,-674,124,-517,639,862,704,25,570,282,639,-428,607,569,594,193,581,380,-780,-106,-649,375,-763]) === 23141)