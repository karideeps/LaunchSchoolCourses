=begin
  
Sum of two integers
  START
  GET num_1
  GET num_2
  SET result

  DEFINE medthod(num_1, num_2)
  SET result = num_1 + num_2
  END

  PRINT result
end

Array of strings to sentence
  START
  GET array_of_strings
  SET b = sentence
  DEFINE methods(array_of_strings)
    For each word in array,
      add word to b
    end
  end
  PRINT b
  end

Array of integers to array with every other element
  START
  GET array_of_integers
  SET new_array
  DEFINE methods(array_of_integers)
    for every even number index
        push to new_array
    end
  end
  PRINT new_array
  end