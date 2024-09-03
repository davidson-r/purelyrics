import json
import os
from slugify import slugify


with open("data/lyrics.json") as f:
    english_lyrics = json.loads(f.read())


with open('data/english_new.json', 'w') as f:
    json.dump(english_lyrics, f, indent=4)


def prep_md(input):
    # input['lyrics'] = [x.replace("\n", "<br/>\n") for x in input['lyrics']]
    # input['lyrics'] = "<br/><br/>\n\n".join(input['lyrics'])

    # input['lyrics'] = input['lyrics'].replace("\n\n", "<br/>\n\n")
    input['lyrics'] = input['lyrics'].replace("\n", "<br/>\n")

    output = "---\ntitle: " + input['title'] + \
        "\n---\n\n---\n<center>\n" + input['lyrics'] + '\n</center>'

    return output


for letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ':
    path = "english/" + letter.capitalize()
    if not os.path.exists(path):
        os.makedirs(path)

for lyric in english_lyrics:

    lyric['title'] = lyric['title'].replace(
        "è", "e").replace(
        ",", "").replace(
        "?", "").replace(
        "'", "").replace(
        "’", "").replace(
        "!", "").strip()

    write_path = "english/" + lyric["letter"].capitalize() + \
        '/' + lyric['slug'] + '.md'

    lyric = prep_md(lyric)

    with open(write_path, 'w+') as f:
        f.write(lyric)
