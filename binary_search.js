/* 
int main() {
    std::cout << "Hello World!\n";
}
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

    Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 


Example: n = 8    [1, 2, 3, 4, 5, 6, 7, 8]
                   G  G  G  B  B  B  B  B
                            ^         
                            ^
                         ^
                    left = 1
                    right = n
                    (right+left)/2
                   if call[mid] == bad -> go left{
                        right = mid
                   }else{ // if call[mid] = good -> go right
                        left = mid + 1      
                   }
                    return mid
                   
                   
 #include <math.h>                  
int WhoIsBad(int n){
    int start, end, mid;
    start = 1;
    end = n;
    
    while(start < end){
        mid = floor((start + end)/2);
        if(isBadVersion(mid) == true){
            end = mid;
        }
        else{
            start = mid + 1;
        }
    }
    return start;
}
 [1, 2, 3, 4, 5, 6, 7, 8]
  G  G  G  B  B  B  B  B
                            ^         
                         ^
                            ^
                           
*/
//javascript 
// def find_bad_version(n)
//   return 1 if isBadVersion(1) == true

//   let left = 2
//   let right = n

//   while left < right
//     mid = (right - left) / 2
    
//     result = isBadVersion(mid)
//     if result == false
//       left = mid + 1
//     else
//       right = mid
//     end
//   end

//   return left
// end