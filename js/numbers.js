/*
 * changes a number greater tan maxNum to a number lower than maxNum
 * It's intended to work for array index numbers
 * so if the maxNumber is 9 (the lenght of the array) and the index is 25,
 * the number will reset to something lesser than 9 ( 7 )
*/
function resetNumberToMax(num, maxNum) {
	if (num <= maxNum) {
		return num;
	}
	divRes = Math.floor(num / maxNum);
	if (divRes < 1) {
		divRes = 1;
	}
	rescon = (num - (divRes * maxNum));
	if (rescon == 0) {
		rescon = maxNum;
	}
	return rescon;

}