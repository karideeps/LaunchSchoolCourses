#!/bin/bash

path="hello_world.sh"

if [[ -e "./$path" ]]
then
  echo 'File exists'
else
  echo 'no'
fi