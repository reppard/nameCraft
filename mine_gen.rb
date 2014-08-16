spans = File.read('spans.txt')
spans.gsub!(/^.*name\"\>/,'')
spans.gsub!(/\<.*/,'')
words = spans.split('\n').collect{ |ent| ent.split(" ") }.flatten

puts "#{words.sample}#{words.sample}"
