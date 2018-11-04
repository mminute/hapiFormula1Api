require 'fileutils'
require_relative 'createDirIfNeeded'
require_relative 'ExportComposer'

seasonYear = 2018
jsonDir = "/Users/mjennings/code/f1_1ster/lib/v2/JSON/#{seasonYear}"

destination = "/Users/mjennings/code/hapiFormula1Api/src/data/JSON/Seasons/#{seasonYear}"

createDirIfNeeded(destination)

filesToIndex = Dir.glob(jsonDir + '/*')

FileUtils.copy(filesToIndex, destination)

indexFile = ExportComposer.new(destination, 'GP').compose

p indexFile


# File.write(@filename, doc.join(''))
