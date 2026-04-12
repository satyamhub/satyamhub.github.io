// DSA Practice Platform
// All problems, UI, and execution logic

// Problem Database
const PROBLEMS = {
  // Easy Problems
  largest_element: {
    id: 'largest_element',
    title: 'Largest Element in Array',
    difficulty: 'Easy',
    category: 'arrays',
    description:
      'Find the largest element in an array.\n\nYou are given an array arr[] of size n. You need to find the largest element in the given array.',
    constraints: '1 <= n <= 10^5, -10^9 <= arr[i] <= 10^9',
    examples: `Input: arr = [1, 8, 7, 56, 90]
Output: 90

Input: arr = [5, 5, 5, 5]
Output: 5`,
    testCases: [
      { input: '5\n1 8 7 56 90', expectedOutput: '90' },
      { input: '4\n5 5 5 5', expectedOutput: '5' },
      { input: '3\n-10 -5 -20', expectedOutput: '-5' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    // Find and print the largest element
    int largest = arr[0];
    for(int i = 1; i < n; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    cout << largest << endl;
    
    return 0;
}`,
  },
  second_largest: {
    id: 'second_largest',
    title: 'Second Largest Element',
    difficulty: 'Easy',
    category: 'arrays',
    description:
      'Find the second largest element in an array.\n\nGiven an array arr[], find the second largest element without sorting.',
    constraints: '2 <= n <= 10^5, Elements are distinct',
    examples: `Input: arr = [12, 35, 1, 10, 34, 1]
Output: 34

Input: arr = [10, 5, 10]
Output: 5`,
    testCases: [
      { input: '6\n12 35 1 10 34 1', expectedOutput: '34' },
      { input: '3\n10 5 10', expectedOutput: '10' },
      { input: '4\n1 2 3 4', expectedOutput: '3' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int largest = INT_MIN, secondLargest = INT_MIN;
    for(int i = 0; i < n; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    cout << secondLargest << endl;
    
    return 0;
}`,
  },
  check_sorted: {
    id: 'check_sorted',
    title: 'Check if Array is Sorted',
    difficulty: 'Easy',
    category: 'arrays',
    description:
      'Check if an array is sorted in non-decreasing order.\n\nReturn 1 if sorted, 0 otherwise.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [1, 2, 3, 4, 5]
Output: 1

Input: arr = [5, 4, 3, 2, 1]
Output: 0`,
    testCases: [
      { input: '5\n1 2 3 4 5', expectedOutput: '1' },
      { input: '5\n5 4 3 2 1', expectedOutput: '0' },
      { input: '3\n1 1 1', expectedOutput: '1' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    bool sorted = true;
    for(int i = 1; i < n; i++) {
        if(arr[i] < arr[i-1]) {
            sorted = false;
            break;
        }
    }
    cout << (sorted ? 1 : 0) << endl;
    
    return 0;
}`,
  },
  remove_duplicates: {
    id: 'remove_duplicates',
    title: 'Remove Duplicates from Sorted Array',
    difficulty: 'Easy',
    category: 'arrays',
    description:
      'Remove duplicates from sorted array in-place.\n\nReturn the count of unique elements.',
    constraints: '1 <= n <= 10^5, Array is sorted',
    examples: `Input: arr = [1, 1, 2, 2, 2, 3]
Output: 3
Modified arr = [1, 2, 3]`,
    testCases: [
      { input: '6\n1 1 2 2 2 3', expectedOutput: '3' },
      { input: '5\n1 2 3 4 5', expectedOutput: '5' },
      { input: '4\n1 1 1 1', expectedOutput: '1' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int count = 1;
    for(int i = 1; i < n; i++) {
        if(arr[i] != arr[i-1]) {
            count++;
        }
    }
    cout << count << endl;
    
    return 0;
}`,
  },
  left_rotate_by_one: {
    id: 'left_rotate_by_one',
    title: 'Left Rotate Array by One',
    difficulty: 'Easy',
    category: 'arrays',
    description:
      'Rotate array left by 1 position.\n\nMove the first element to the end.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [1, 2, 3, 4, 5]
Output: [2, 3, 4, 5, 1]`,
    testCases: [
      { input: '5\n1 2 3 4 5', expectedOutput: '2 3 4 5 1 ' },
      { input: '3\n1 2 3', expectedOutput: '2 3 1 ' },
      { input: '1\n5', expectedOutput: '5 ' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int first = arr[0];
    for(int i = 0; i < n-1; i++) {
        arr[i] = arr[i+1];
    }
    arr[n-1] = first;
    
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  move_zeroes: {
    id: 'move_zeroes',
    title: 'Move All Zeroes to End',
    difficulty: 'Easy',
    category: 'arrays',
    description:
      'Move all zero elements to the end of the array while maintaining the relative order of non-zero elements.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [1, 0, 2, 0, 3]
Output: [1, 2, 3, 0, 0]`,
    testCases: [
      { input: '5\n1 0 2 0 3', expectedOutput: '1 2 3 0 0 ' },
      { input: '6\n0 0 1 2 0 3', expectedOutput: '1 2 3 0 0 0 ' },
      { input: '3\n0 0 0', expectedOutput: '0 0 0 ' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int pos = 0;
    for(int i = 0; i < n; i++) {
        if(arr[i] != 0) {
            arr[pos++] = arr[i];
        }
    }
    while(pos < n) {
        arr[pos++] = 0;
    }
    
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  linear_search: {
    id: 'linear_search',
    title: 'Linear Search',
    difficulty: 'Easy',
    category: 'basics',
    description:
      'Search for an element in an array using linear search.\n\nReturn the index if found, -1 otherwise.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [1, 5, 10, 20], x = 10
Output: 2

Input: arr = [1, 5, 10, 20], x = 30
Output: -1`,
    testCases: [
      { input: '4 10\n1 5 10 20', expectedOutput: '2' },
      { input: '4 30\n1 5 10 20', expectedOutput: '-1' },
      { input: '1 1\n1', expectedOutput: '0' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    for(int i = 0; i < n; i++) {
        if(arr[i] == x) {
            cout << i << endl;
            return 0;
        }
    }
    cout << -1 << endl;
    
    return 0;
}`,
  },

  // Medium Problems
  left_rotate_by_k: {
    id: 'left_rotate_by_k',
    title: 'Left Rotate Array by K',
    difficulty: 'Medium',
    category: 'arrays',
    description:
      'Rotate array to the left by k positions.\n\nUse the reversal method for O(n) time and O(1) space.',
    constraints: '1 <= n <= 10^5, 0 <= k <= n',
    examples: `Input: arr = [1,2,3,4,5], k = 2
Output: [3,4,5,1,2]`,
    testCases: [
      { input: '5 2\n1 2 3 4 5', expectedOutput: '3 4 5 1 2 ' },
      { input: '5 1\n1 2 3 4 5', expectedOutput: '2 3 4 5 1 ' },
      { input: '5 5\n1 2 3 4 5', expectedOutput: '1 2 3 4 5 ' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    k = k % n;
    reverse(arr.begin(), arr.begin() + k);
    reverse(arr.begin() + k, arr.end());
    reverse(arr.begin(), arr.end());
    
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  union_of_arrays: {
    id: 'union_of_arrays',
    title: 'Union of Two Sorted Arrays',
    difficulty: 'Medium',
    category: 'arrays',
    description:
      'Find the union of two sorted arrays.\n\nReturn all unique elements from both arrays in sorted order.',
    constraints: '1 <= n, m <= 10^5, Arrays are sorted',
    examples: `Input: arr1 = [1,2,3], arr2 = [2,3,4]
Output: [1, 2, 3, 4]`,
    testCases: [
      { input: '3 3\n1 2 3\n2 3 4', expectedOutput: '1 2 3 4 ' },
      { input: '2 3\n1 2\n3 4 5', expectedOutput: '1 2 3 4 5 ' },
      { input: '1 1\n1\n1', expectedOutput: '1 ' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<int> arr1(n), arr2(m);
    for(int i = 0; i < n; i++) cin >> arr1[i];
    for(int i = 0; i < m; i++) cin >> arr2[i];
    
    set<int> st(arr1.begin(), arr1.end());
    for(int i = 0; i < m; i++) {
        st.insert(arr2[i]);
    }
    
    for(int x : st) {
        cout << x << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  intersection_of_arrays: {
    id: 'intersection_of_arrays',
    title: 'Intersection of Two Sorted Arrays',
    difficulty: 'Medium',
    category: 'arrays',
    description:
      'Find the intersection of two sorted arrays.\n\nReturn common elements in sorted order.',
    constraints: '1 <= n, m <= 10^5',
    examples: `Input: arr1 = [1,2,3,4], arr2 = [2,3,4,5]
Output: [2, 3, 4]`,
    testCases: [
      { input: '4 4\n1 2 3 4\n2 3 4 5', expectedOutput: '2 3 4 ' },
      { input: '3 2\n1 2 3\n2 3', expectedOutput: '2 3 ' },
      { input: '3 3\n1 2 3\n4 5 6', expectedOutput: '' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<int> arr1(n), arr2(m);
    for(int i = 0; i < n; i++) cin >> arr1[i];
    for(int i = 0; i < m; i++) cin >> arr2[i];
    
    int i = 0, j = 0;
    while(i < n && j < m) {
        if(arr1[i] < arr2[j]) {
            i++;
        } else if(arr1[i] > arr2[j]) {
            j++;
        } else {
            cout << arr1[i] << " ";
            i++;
            j++;
        }
    }
    cout << endl;
    
    return 0;
}`,
  },
  missing_number: {
    id: 'missing_number',
    title: 'Find Missing Number',
    difficulty: 'Medium',
    category: 'arrays',
    description:
      'Given an array containing n-1 distinct numbers from 1 to n, find the missing number.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [1,3,4], n = 4
Output: 2

Input: arr = [1], n = 2
Output: 2`,
    testCases: [
      { input: '3 4\n1 3 4', expectedOutput: '2' },
      { input: '1 2\n1', expectedOutput: '2' },
      { input: '2 3\n1 3', expectedOutput: '2' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, size;
    cin >> size >> n;
    vector<int> arr(size);
    for(int i = 0; i < size; i++) {
        cin >> arr[i];
    }
    
    long long totalSum = (long long)n * (n + 1) / 2;
    long long arrSum = 0;
    for(int x : arr) {
        arrSum += x;
    }
    
    cout << (totalSum - arrSum) << endl;
    
    return 0;
}`,
  },
  max_consecutive_ones: {
    id: 'max_consecutive_ones',
    title: 'Max Consecutive Ones',
    difficulty: 'Medium',
    category: 'arrays',
    description:
      'Count the maximum number of consecutive 1s in a binary array.',
    constraints: '1 <= n <= 10^5, arr[i] ∈ {0, 1}',
    examples: `Input: arr = [1,1,0,1,1,1]
Output: 3`,
    testCases: [
      { input: '6\n1 1 0 1 1 1', expectedOutput: '3' },
      { input: '5\n0 0 0 0 0', expectedOutput: '0' },
      { input: '4\n1 1 1 1', expectedOutput: '4' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int maxCount = 0, count = 0;
    for(int i = 0; i < n; i++) {
        if(arr[i] == 1) {
            count++;
            maxCount = max(maxCount, count);
        } else {
            count = 0;
        }
    }
    
    cout << maxCount << endl;
    
    return 0;
}`,
  },
  single_number: {
    id: 'single_number',
    title: 'Single Number (XOR)',
    difficulty: 'Medium',
    category: 'arrays',
    description:
      'Every element appears twice except one. Find the single element using XOR.',
    constraints: '1 <= n <= 10^4',
    examples: `Input: arr = [1,2,2,3,3]
Output: 1`,
    testCases: [
      { input: '5\n1 2 2 3 3', expectedOutput: '1' },
      { input: '3\n4 1 4', expectedOutput: '1' },
      { input: '1\n5', expectedOutput: '5' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int result = 0;
    for(int i = 0; i < n; i++) {
        int x;
        cin >> x;
        result ^= x;
    }
    
    cout << result << endl;
    
    return 0;
}`,
  },
  longest_subarray_sum_k: {
    id: 'longest_subarray_sum_k',
    title: 'Longest Subarray with Sum K',
    difficulty: 'Medium',
    category: 'arrays',
    description:
      'Find the length of longest subarray with sum equal to k.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [1,2,3], k = 6
Output: 3`,
    testCases: [
      { input: '3 6\n1 2 3', expectedOutput: '3' },
      { input: '4 5\n1 2 3 -1', expectedOutput: '2' },
      { input: '3 10\n1 2 3', expectedOutput: '0' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    unordered_map<int, int> mp;
    int maxLen = 0, sum = 0;
    mp[0] = -1;
    
    for(int i = 0; i < n; i++) {
        sum += arr[i];
        if(mp.find(sum - k) != mp.end()) {
            maxLen = max(maxLen, i - mp[sum - k]);
        }
        if(mp.find(sum) == mp.end()) {
            mp[sum] = i;
        }
    }
    
    cout << maxLen << endl;
    
    return 0;
}`,
  },
  two_sum: {
    id: 'two_sum',
    title: 'Two Sum',
    difficulty: 'Medium',
    category: 'arrays',
    description:
      'Given an array and target, find two indices whose sum equals target.',
    constraints: '2 <= n <= 10^5',
    examples: `Input: arr = [2,7,11,15], target = 9
Output: [0, 1]`,
    testCases: [
      { input: '4 9\n2 7 11 15', expectedOutput: '0 1' },
      { input: '3 6\n3 2 4', expectedOutput: '1 2' },
      { input: '2 5\n2 3', expectedOutput: '0 1' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, target;
    cin >> n >> target;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    unordered_map<int, int> mp;
    for(int i = 0; i < n; i++) {
        int complement = target - arr[i];
        if(mp.find(complement) != mp.end()) {
            cout << mp[complement] << " " << i << endl;
            return 0;
        }
        mp[arr[i]] = i;
    }
    
    return 0;
}`,
  },
  sort_0_1_2: {
    id: 'sort_0_1_2',
    title: 'Dutch National Flag (Sort 0,1,2)',
    difficulty: 'Medium',
    category: 'arrays',
    description:
      'Sort array containing only 0s, 1s, and 2s in-place using Dutch National Flag algorithm.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]`,
    testCases: [
      { input: '6\n2 0 2 1 1 0', expectedOutput: '0 0 1 1 2 2 ' },
      { input: '3\n0 1 2', expectedOutput: '0 1 2 ' },
      { input: '4\n2 2 2 2', expectedOutput: '2 2 2 2 ' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int low = 0, mid = 0, high = n - 1;
    while(mid <= high) {
        if(arr[mid] == 0) {
            swap(arr[low], arr[mid]);
            low++;
            mid++;
        } else if(arr[mid] == 1) {
            mid++;
        } else {
            swap(arr[mid], arr[high]);
            high--;
        }
    }
    
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  majority_element: {
    id: 'majority_element',
    title: 'Majority Element',
    difficulty: 'Medium',
    category: 'arrays',
    description:
      'Find the element appearing more than n/2 times using Boyer-Moore Voting algorithm.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [3,2,3]
Output: 3`,
    testCases: [
      { input: '3\n3 2 3', expectedOutput: '3' },
      { input: '5\n2 2 1 1 1', expectedOutput: '1' },
      { input: '4\n4 4  4 4', expectedOutput: '4' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int candidate = arr[0], count = 1;
    for(int i = 1; i < n; i++) {
        if(arr[i] == candidate) {
            count++;
        } else if(count == 0) {
            candidate = arr[i];
            count = 1;
        } else {
            count--;
        }
    }
    
    cout << candidate << endl;
    
    return 0;
}`,
  },

  // Hard Problems
  kadane_algorithm: {
    id: 'kadane_algorithm',
    title: 'Maximum Subarray Sum (Kadane)',
    difficulty: 'Hard',
    category: 'arrays',
    description:
      'Find the maximum sum of any contiguous subarray using Kadane\'s algorithm.',
    constraints: '1 <= n <= 10^5, -10^9 <= arr[i] <= 10^9',
    examples: `Input: arr = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6 (subarray [4,-1,2,1])`,
    testCases: [
      { input: '9\n-2 1 -3 4 -1 2 1 -5 4', expectedOutput: '6' },
      { input: '5\n5 -3 5', expectedOutput: '7' },
      { input: '3\n-1 -2 -3', expectedOutput: '-1' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    long long maxSum = arr[0], currentSum = arr[0];
    for(int i = 1; i < n; i++) {
        currentSum = max((long long)arr[i], currentSum + arr[i]);
        maxSum = max(maxSum, currentSum);
    }
    
    cout << maxSum << endl;
    
    return 0;
}`,
  },
  rearrange_positive_negative: {
    id: 'rearrange_positive_negative',
    title: 'Rearrange Array (+ve -ve)',
    difficulty: 'Hard',
    category: 'arrays',
    description:
      'Rearrange array alternating between positive and negative numbers.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [1,-2,3,-4,5]
Output: [1,-2,3,-4,5] or [-2,1,-4,3,5]`,
    testCases: [
      { input: '5\n1 -2 3 -4 5', expectedOutput: '1 -2 3 -4 5 ' },
      { input: '4\n1 2 3 -1', expectedOutput: '1 -1 2 3 ' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    vector<int> pos, neg;
    for(int x : arr) {
        if(x >= 0) pos.push_back(x);
        else neg.push_back(x);
    }
    
    vector<int> result;
    int i = 0, j = 0;
    while(i < pos.size() && j < neg.size()) {
        result.push_back(pos[i++]);
        result.push_back(neg[j++]);
    }
    while(i < pos.size()) result.push_back(pos[i++]);
    while(j < neg.size()) result.push_back(neg[j++]);
    
    for(int x : result) {
        cout << x << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  next_permutation: {
    id: 'next_permutation',
    title: 'Next Permutation',
    difficulty: 'Hard',
    category: 'arrays',
    description:
      'Find the next lexicographically greater permutation of an array.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [1,2,3]
Output: [1,3,2]

Input: arr = [3,2,1]
Output: [1,2,3]`,
    testCases: [
      { input: '3\n1 2 3', expectedOutput: '1 3 2 ' },
      { input: '3\n3 2 1', expectedOutput: '1 2 3 ' },
      { input: '4\n1 3 2 4', expectedOutput: '1 4 2 3 ' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    next_permutation(arr.begin(), arr.end());
    
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  leaders_in_array: {
    id: 'leaders_in_array',
    title: 'Leaders in Array',
    difficulty: 'Hard',
    category: 'arrays',
    description:
      'Find all leaders. An element is leader if it is greater than all elements to its right.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [10,17,5,3,5,2]
Output: [17,5,5,2]`,
    testCases: [
      { input: '6\n10 17 5 3 5 2', expectedOutput: '17 5 5 2 ' },
      { input: '5\n1 2 3 4 5', expectedOutput: '5 ' },
      { input: '5\n5 4 3 2 1', expectedOutput: '5 4 3 2 1 ' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    vector<int> leaders;
    int maxRight = INT_MIN;
    for(int i = n - 1; i >= 0; i--) {
        if(arr[i] > maxRight) {
            leaders.push_back(arr[i]);
            maxRight = arr[i];
        }
    }
    
    reverse(leaders.begin(), leaders.end());
    for(int x : leaders) {
        cout << x << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
  longest_consecutive_sequence: {
    id: 'longest_consecutive_sequence',
    title: 'Longest Consecutive Sequence',
    difficulty: 'Hard',
    category: 'arrays',
    description:
      'Find longest sequence of consecutive elements in O(n) time.',
    constraints: '1 <= n <= 10^5',
    examples: `Input: arr = [100,4,200,1,3,2]
Output: 4 (sequence [1,2,3,4])`,
    testCases: [
      { input: '6\n100 4 200 1 3 2', expectedOutput: '4' },
      { input: '5\n0 3 7 2 5', expectedOutput: '1' },
      { input: '4\n1 2 3 4', expectedOutput: '4' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    unordered_set<int> st(arr.begin(), arr.end());
    int maxLen = 0;
    
    for(int x : st) {
        if(st.find(x - 1) == st.end()) {
            int len = 1, current = x;
            while(st.find(current + 1) != st.end()) {
                current++;
                len++;
            }
            maxLen = max(maxLen, len);
        }
    }
    
    cout << maxLen << endl;
    
    return 0;
}`,
  },
  set_matrix_zero: {
    id: 'set_matrix_zero',
    title: 'Set Matrix Zeros',
    difficulty: 'Hard',
    category: 'arrays',
    description:
      'If element is 0, set entire row and column to 0. Do it in-place.',
    constraints: '1 <= m,n <= 200',
    examples: `Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]`,
    testCases: [
      { input: '3 3\n1 1 1\n1 0 1\n1 1 1', expectedOutput: '1 0 1\n0 0 0\n1 0 1\n' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int m, n;
    cin >> m >> n;
    vector<vector<int>> matrix(m, vector<int>(n));
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }
    
    vector<pair<int,int>> zeros;
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            if(matrix[i][j] == 0) {
                zeros.push_back({i, j});
            }
        }
    }
    
    for(auto& p : zeros) {
        int row = p.first, col = p.second;
        for(int j = 0; j < n; j++) {
            matrix[row][j] = 0;
        }
        for(int i = 0; i < m; i++) {
            matrix[i][col] = 0;
        }
    }
    
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            cout << matrix[i][j];
            if(j < n-1) cout << " ";
        }
        cout << "\\n";
    }
    
    return 0;
}`,
  },
  rotate_matrix: {
    id: 'rotate_matrix',
    title: 'Rotate Matrix 90 Degrees',
    difficulty: 'Hard',
    category: 'arrays',
    description: 'Rotate n x n matrix 90 degrees clockwise in-place.',
    constraints: '1 <= n <= 20',
    examples: `Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]`,
    testCases: [
      { input: '2\n1 2\n3 4', expectedOutput: '3 1\n4 2\n' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<vector<int>> matrix(n, vector<int>(n));
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }
    
    for(int i = 0; i < n; i++) {
        for(int j = i; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    
    for(int i = 0; i < n; i++) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
    
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cout << matrix[i][j];
            if(j < n-1) cout << " ";
        }
        cout << "\\n";
    }
    
    return 0;
}`,
  },
  spiral_matrix: {
    id: 'spiral_matrix',
    title: 'Spiral Matrix',
    difficulty: 'Hard',
    category: 'arrays',
    description: 'Return all elements in spiral order.',
    constraints: '1 <= m,n <= 10',
    examples: `Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]`,
    testCases: [
      { input: '3 3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '1 2 3 6 9 8 7 4 5 ' },
    ],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int m, n;
    cin >> m >> n;
    vector<vector<int>> matrix(m, vector<int>(n));
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }
    
    vector<int> result;
    int top = 0, bottom = m - 1, left = 0, right = n - 1;
    
    while(top <= bottom && left <= right) {
        for(int i = left; i <= right; i++) {
            result.push_back(matrix[top][i]);
        }
        top++;
        
        for(int i = top; i <= bottom; i++) {
            result.push_back(matrix[i][right]);
        }
        right--;
        
        if(top <= bottom) {
            for(int i = right; i >= left; i--) {
                result.push_back(matrix[bottom][i]);
            }
            bottom--;
        }
        
        if(left <= right) {
            for(int i = bottom; i >= top; i--) {
                result.push_back(matrix[i][left]);
            }
            left++;
        }
    }
    
    for(int x : result) {
        cout << x << " ";
    }
    cout << endl;
    
    return 0;
}`,
  },
};

// App State
let editor;
let currentProblem = null;
let timerInterval = null;
let timerStart = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initEditor();
  loadProgress();
  setupEventListeners();
  displayProblems();
  updateStats();
});

// Monaco Editor Setup
function initEditor() {
  require(['vs/editor/editor.main'], () => {
    editor = monaco.editor.create(document.getElementById('editor'), {
      value: '',
      language: 'cpp',
      theme: 'vs-dark',
      fontSize: 14,
      fontFamily: "'Courier New', monospace",
      minimap: { enabled: false },
      automaticLayout: true,
      wordWrap: 'on',
      scrollBeyondLastLine: false,
      smoothScrolling: true,
    });
  });
}

// Event Listeners
function setupEventListeners() {
  // Category buttons
  document.querySelectorAll('.category-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      displayProblems();
    });
  });

  // Difficulty filters
  document.querySelectorAll('.filter-checkbox input').forEach((input) => {
    input.addEventListener('change', displayProblems);
  });

  // Back button
  document.getElementById('backBtn').addEventListener('click', goBackToList);

  // Run button
  document.getElementById('runBtn').addEventListener('click', runCode);

  // Submit button
  document.getElementById('submitBtn').addEventListener('click', submitCode);

  // Reset button
  document.getElementById('resetBtn').addEventListener('click', resetCode);
}

// Display Problems List
function displayProblems() {
  const category = document.querySelector('.category-btn.active').dataset.category;
  const difficulties = getDifficultyFilters();
  const showSolved = document.querySelector('.filter-checkbox input[value="solved"]').checked;
  const showUnsolved = document.querySelector('.filter-checkbox input[value="unsolved"]').checked;

  let filtered = Object.values(PROBLEMS);

  if (category !== 'all' && category !== 'daily') {
    filtered = filtered.filter((p) => p.category === category);
  } else if (category === 'daily') {
    filtered = generateDailyTasks();
  }

  filtered = filtered.filter((p) => difficulties.includes(p.difficulty));

  const progress = getProgress();
  if (showSolved || showUnsolved) {
    filtered = filtered.filter((p) => {
      const solved = progress[p.id]?.solved || false;
      return (solved && showSolved) || (!solved && showUnsolved);
    });
  }

  const listView = document.getElementById('listView');
  const listCount = document.getElementById('listCount');
  listCount.textContent = `${filtered.length} problem${filtered.length !== 1 ? 's' : ''}`;

  const problemList = document.getElementById('problemList');
  problemList.innerHTML = '';

  filtered.forEach((problem) => {
    const item = document.createElement('div');
    item.className = 'problem-item';
    const progress = getProgress();
    if (progress[problem.id]?.solved) {
      item.classList.add('solved');
    }

    item.innerHTML = `
      <div class="problem-item-content">
        <h4 class="problem-item-title">${problem.title}</h4>
        <div class="problem-item-meta">
          <span class="difficulty ${problem.difficulty.toLowerCase()}">${problem.difficulty}</span>
          ${progress[problem.id] ? `<span>${progress[problem.id].attempts} attempts</span>` : ''}
        </div>
      </div>
    `;

    item.addEventListener('click', () => loadProblem(problem));
    problemList.appendChild(item);
  });
}

// Generate Daily Tasks
function generateDailyTasks() {
  const progress = getProgress();
  const unsolved = Object.values(PROBLEMS).filter((p) => !progress[p.id]?.solved);

  const easy = unsolved.filter((p) => p.difficulty === 'Easy').slice(0, 2);
  const medium = unsolved.filter((p) => p.difficulty === 'Medium').slice(0, 2);
  const hard = unsolved.filter((p) => p.difficulty === 'Hard').slice(0, 1);

  return [...easy, ...medium, ...hard];
}

// Get Difficulty Filters
function getDifficultyFilters() {
  const filters = [];
  document.querySelectorAll('.filter-checkbox input').forEach((input) => {
    if (input.value !== 'solved' && input.value !== 'unsolved' && input.checked) {
      filters.push(input.value);
    }
  });
  return filters;
}

// Load Problem
function loadProblem(problem) {
  currentProblem = problem;
  document.getElementById('problemTitle').textContent = problem.title;
  document.getElementById('problemDifficulty').textContent = problem.difficulty;
  document.getElementById('problemDifficulty').className = `difficulty ${problem.difficulty.toLowerCase()}`;
  document.getElementById('problemDescription').textContent = problem.description;
  document.getElementById('problemExample').textContent = problem.examples;
  document.getElementById('problemConstraints').textContent = problem.constraints;

  const progress = getProgress();
  const attempts = progress[problem.id]?.attempts || 0;
  document.getElementById('attemptCount').textContent = `Attempts: ${attempts}`;

  document.getElementById('listView').classList.add('hidden');
  document.getElementById('detailView').classList.remove('hidden');

  // Load code
  const code = localStorage.getItem(`code_${problem.id}`) || problem.template;
  editor.setValue(code);

  // Clear output
  document.getElementById('output').textContent = '';
  document.getElementById('outputStatus').textContent = '';
  document.getElementById('output').className = 'output-box empty';

  // Start timer
  startTimer();
}

// Timer
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerStart = Date.now();
  updateTimer();
  timerInterval = setInterval(updateTimer, 100);
}

function updateTimer() {
  if (!timerStart) return;
  const elapsed = Math.floor((Date.now() - timerStart) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  document.getElementById('timer').textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Go Back
function goBackToList() {
  if (timerInterval) clearInterval(timerInterval);
  document.getElementById('listView').classList.remove('hidden');
  document.getElementById('detailView').classList.add('hidden');
  currentProblem = null;
}

// Reset Code
function resetCode() {
  if (!currentProblem) return;
  editor.setValue(currentProblem.template);
  showToast('Code reset to template', 'info');
}

// Run Code
async function runCode() {
  if (!currentProblem) return;
  runExecuteCode(false);
}

// Submit Code
async function submitCode() {
  if (!currentProblem) return;
  runExecuteCode(true);
}

// Execute Code with Judge0
async function runExecuteCode(isSubmit) {
  const code = editor.getValue();
  if (!code.trim()) {
    showToast('Please write some code first', 'error');
    return;
  }

  localStorage.setItem(`code_${currentProblem.id}`, code);

  const output = document.getElementById('output');
  const status = document.getElementById('outputStatus');
  output.textContent = 'Executing...';
  output.className = 'output-box';
  status.textContent = '';

  let allCorrect = true;
  let resultDetails = '';

  for (const testCase of currentProblem.testCases) {
    try {
      const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': 'b8f3c62e2emshc8d1c1df8e43b84p1d1b47jsn75cdc0dd03e7',
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language_id: 54, // C++
          source_code: code,
          stdin: testCase.input,
        }),
      });

      const result = await response.json();

      if (result.status.id === 3) {
        // Accepted
        const actualOutput = result.stdout.trim();
        const expected = testCase.expectedOutput.trim();

        if (actualOutput === expected) {
          resultDetails += `✓ Test passed\n`;
        } else {
          resultDetails += `✗ Test failed\nExpected: ${expected}\nGot: ${actualOutput}\n`;
          allCorrect = false;
        }
      } else {
        resultDetails += `✗ Error: ${result.status.description}\n${result.stderr || ''}\n`;
        allCorrect = false;
      }
    } catch (error) {
      resultDetails += `✗ Judge0 Error: ${error.message}\n`;
      allCorrect = false;
    }
  }

  output.textContent = resultDetails;
  output.className = 'output-box ' + (allCorrect ? 'success' : 'error');

  if (isSubmit) {
    if (allCorrect) {
      status.textContent = 'PASS ✓';
      status.className = 'success';
      recordSolution();
      showToast('Problem Solved! 🎉', 'success');
    } else {
      status.textContent = 'FAIL ✗';
      status.className = 'error';
      recordAttempt();
      showToast('Keep trying!', 'error');
    }
  }
}

// Record Solution
function recordSolution() {
  const progress = getProgress();
  const elapsed = Math.floor((Date.now() - timerStart) / 1000);

  progress[currentProblem.id] = {
    solved: true,
    attempts: (progress[currentProblem.id]?.attempts || 0) + 1,
    bestTime: Math.min(elapsed, progress[currentProblem.id]?.bestTime || elapsed),
  };

  localStorage.setItem('dsa_progress', JSON.stringify(progress));
  updateStats();
  displayProblems();
}

// Record Attempt
function recordAttempt() {
  const progress = getProgress();
  progress[currentProblem.id] = {
    ...progress[currentProblem.id],
    attempts: (progress[currentProblem.id]?.attempts || 0) + 1,
  };
  localStorage.setItem('dsa_progress', JSON.stringify(progress));
  document.getElementById('attemptCount').textContent = `Attempts: ${progress[currentProblem.id].attempts}`;
}

// Progress Management
function getProgress() {
  const stored = localStorage.getItem('dsa_progress');
  return stored ? JSON.parse(stored) : {};
}

function loadProgress() {
  const progress = getProgress();
  // Ensure all problems are tracked
  Object.keys(PROBLEMS).forEach((id) => {
    if (!progress[id]) {
      progress[id] = { solved: false, attempts: 0, bestTime: 0 };
    }
  });
  localStorage.setItem('dsa_progress', JSON.stringify(progress));
}

// Update Statistics
function updateStats() {
  const progress = getProgress();
  const total = Object.keys(PROBLEMS).length;
  const solved = Object.values(progress).filter((p) => p.solved).length;
  const percentage = Math.round((solved / total) * 100);

  document.getElementById('solvedCount').textContent = solved;
  document.getElementById('totalCount').textContent = total;
  document.getElementById('progressPercent').textContent = `${percentage}%`;
}

// Toast Notifications
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
