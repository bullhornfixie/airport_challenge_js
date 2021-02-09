# Airport challenge in JavaScript

### User stories

 - key : * nouns *, # methods #

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a *plane* #to land# at an *airport*
```
[x]
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a *plane* to #take off# from an *airport* and #confirm that it is no longer in the airport#
```
[]
```
As an air traffic controller
To ensure safety
I want to #prevent landing# when the #*airport* is full#
```
[]
```
As the system designer
So that the software can be used for many different airports
I would like a *default airport capacity* that can be #overridden as appropriate#
```
[]
```
As an air traffic controller
To ensure safety
I want to #prevent takeoff# when #weather is stormy#
```
[]
```
As an air traffic controller
To ensure safety
I want to #prevent landing# when #weather is stormy#
```
[]

|nouns | owner/ owned by|
|---|---|
|plane | owner |
|airport | owner |
|DEFAULT_AIRPORT_CAPACITY | owned by airport |

|method | edits |
|---|---|
|to land | plane |
|take off | plane |
|confirm that it is no longer in the airport | airport/ plane |
|prevent landing when airport is full | airport |
|airport is full? | airport |
|default airport capacity that can be overridden as appropriate | airport |
|prevent takeoff when weather is stormy | plane |
|prevent landing when weather is stormy | plane |
