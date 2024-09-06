from flask import Flask, render_template, g, redirect, request

app = Flask(__name__)

@app.before_request
def load_contents():
    with open("book_viewer/data/toc.txt", "r") as file:
        g.contents = file.readlines()

@app.route("/")
def index():
    return render_template('home.html', contents=g.contents)

@app.route("/chapters/<page_num>")
def chapter(page_num):
    chapter_name = g.contents[int(page_num) - 1]
    title = f'Chapter {page_num}: {chapter_name}'

    with open(f"book_viewer/data/chp{page_num}.txt", "r") as file:
        chapter_content = file.read()

    return render_template('chapter.html',
                            title=title,
                            contents=g.contents,
                            chapter=chapter_content)

@app.route("/show/<name>")
def show_name(name):
    return name

def in_paragraphs(text):
    content = text.split('\n\n')
    content = [f'<p id="{para_num}">{content}</p>'
               for para_num, content in enumerate(content, 1)]
    return ''.join(content)
app.jinja_env.filters['in_paragraphs'] = in_paragraphs

def chapters_matching(query):
    if not query:
        return []

    results = {}

    for chapter_num, chapter_name in enumerate(g.contents, 1):
        with open(f'book_viewer/data/chp{chapter_num}.txt', 'r') as file:
            chapter_content = file.read()
            paragraphs = chapter_content.split('\n\n')
            paragraphs = enumerate(paragraphs, 1)

            for para_num, paragraph in paragraphs:
                if query.lower() in paragraph.lower():
                    chapter = (chapter_num, chapter_name)
                    if chapter not in results:
                        results[chapter] = []
                    results[chapter].append((para_num, paragraph))
    return results

@app.route("/search")
def search():
    query = request.args.get('query', '')
    results = chapters_matching(query)
    return render_template('search.html', query=query, results=results)

@app.errorhandler(404)
def page_not_found(error):
    return redirect("/")

def highlight(text, term):
    return text.replace(term, f'<strong>{term}</strong>')
app.jinja_env.filters['highlight'] = highlight

if __name__ == "__main__":
    app.run(debug=True, port=5003)