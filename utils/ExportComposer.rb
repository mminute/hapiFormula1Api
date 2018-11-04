require_relative 'title_case'

class ExportComposer
    attr_reader :directory_name

    def initialize(directory_name, prefix = '')
        @directory_name = directory_name
        @prefix = prefix
    end

    def compose
        files = Dir[@directory_name + "/*"].sort.select { |file_name| !file_name.match(/\.js$/) }

        import_data = files.map { |file_path| compose_import(file_path) }

        grouped_data = group_import_texts(import_data)

        text = aggregate_text(grouped_data)

        destination = @directory_name + '/index.js'

        IO.write(destination, text)

        destination
    end

    private
    def aggregate_text(grouped_data)
        text = ''
        grouped_data[:import_texts].each { |import_text|
            text = text + import_text + ";\n"
        }

        text = text + "\n" + 'module.exports = ['

        grouped_data[:import_names].each { |import_name|
            text = text + "\n" + "  #{import_name},"
        }

        text + "\n" + '];' + "\n"
    end

    def compose_import(file_path)
        matches = file_path.match(/([\w\-]*)\.json$/)
        file_name = matches.captures[0]
        import_name = @prefix + file_name.gsub('-', '')
        import_text = "import #{import_name} from './#{file_name}.json'"

        {
            import_text: import_text,
            import_name: import_name,
        }
    end

    def group_import_texts(import_data)
        import_texts = []
        import_names = []

        import_data.each { |import|
            import_texts << import[:import_text]
            import_names << import[:import_name]
        }
        
        {
            import_names: import_names,
            import_texts: import_texts,
        }
    end
end
