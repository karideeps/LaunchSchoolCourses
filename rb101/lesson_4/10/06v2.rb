flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)



puts flintstones.map {|name| name[0,3]} == %w(Fre Bar Wil Bet Bam Peb)