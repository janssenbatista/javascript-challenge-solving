# Time Conversion

Given a time in 12[-hour AM/PM format](https://en.wikipedia.org/wiki/12-hour_clock), convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
\- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

**Example**

- _s = '12:01:00PM'_

  Return '12:01:00'.

- s = '12:01:00AM'

  Return '00:01:00'.

**Function Description**

Complete the _timeConversion_ function in the editor below. It should return a new string representing the input time in 24 hour format.

_timeConversion_ has the following parameter(s):

- _string s_: a time in 12 hour format

**Returns**

- _string_: the time in 24 hour format

**Input Format**

A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

**Constraints**

- All input times are valid

**Sample Input 0**

```
07:05:45PM
```

**Sample Output 0**

```
19:05:45
```
