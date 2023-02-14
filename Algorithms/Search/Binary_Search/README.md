# Binary Search

Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

Binary Search Algorithm: The basic steps to perform Binary Search are:

1. Sort the array in ascending order.
2. Set the low index to the first element of the array and the high index to the last element.
3. Set the middle index to the average of the low and high indices.
4. If the element at the middle index is the target element, return the middle index.
5. If the target element is less than the element at the middle index, set the high index to the middle index – 1.
6. If the target element is greater than the element at the middle index, set the low index to the middle index + 1.
7. Repeat steps 3-6 until the element is found or it is clear that the element is not present in the array.

Binary Search Algorithm can be implemented in the following two ways

1.  Iterative Method
    <sup>

        binarySearch(arr, x, low, high)
            repeat till low = high
               mid = (low + high)/2
                   if (x == arr[mid])
                   return mid

                   else if (x > arr[mid]) // x is on the right side
                       low = mid + 1

                   else                  // x is on the left side
                       high = mid - 1

    </sup>

2.  Recursive Method
    <sup>

        binarySearch(arr, x, low, high)
           if low > high
               return False

           else
               mid = (low + high) / 2
                   if x == arr[mid]
                   return mid

               else if x > arr[mid]        // x is on the right side
                   return binarySearch(arr, x, mid + 1, high)

               else                        // x is on the left side
                   return binarySearch(arr, x, low, mid - 1)

    </sup>
