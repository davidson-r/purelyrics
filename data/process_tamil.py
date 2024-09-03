import json
import os


with open("data/pj.json") as f:
    tamil_lyrics = json.loads(f.read())

tamil_lyrics_new = []
tamil_letters = set()

for tamil_lyric in tamil_lyrics:
    tamil_lyric["songNo"] = tamil_lyric["songNo"][0]
    tamil_lyric["title"] = tamil_lyric["title"][0].strip()
    tamil_lyric["index"] = list(tamil_lyric["title"][0][0])[0]

    if not tamil_lyric["index"].isdigit() and tamil_lyric["index"]\
            not in ['ஹ', '"', 'Þ', 'ஐ', 'ற', 'ள', 'ழ']:
        tamil_letters.add(list(tamil_lyric["title"][0][0])[0])

        # generate slug

        slug = " ".join(tamil_lyric['title'].split(' ')[0:5]
                        ).replace("?", "").replace("!", "").replace("(", "").replace(")", "")
        slug = slug.strip()
        slug = slug.replace(' ', '-')
        while '--' in slug:
            slug = slug.replace('--', '-')
        tamil_lyric['slug'] = slug

        tamil_lyrics_new.append(tamil_lyric)


tamil_lyrics_new = sorted(tamil_lyrics_new, key=lambda d: d['title'])

with open('data/pj_new.json', 'w') as f:
    json.dump(tamil_lyrics_new, f, indent=4, ensure_ascii=False)


tamil_letters = list(tamil_letters)
tamil_letters.sort()

letters = {}
for i, letter in enumerate(tamil_letters):
    letters[letter] = (str(i)) + '-' + letter

with open('data/tamil_letters.json', 'w') as f:
    json.dump(letters, f, indent=4, ensure_ascii=False)

# Create folders
for k, v in letters.items():
    path = "docs/" + v
    if not os.path.exists(path):
        os.makedirs(path)


def prep_md(input, inx):
    input['lyrics'] = [x.replace("\n", "<br/>\n") for x in input['lyrics']]
    input['lyrics'] = "<br/><br/>\n\n".join(input['lyrics'])
    input['lyrics'] = input['lyrics'].replace(
        "அனுபல்லவி", "<br/><strong>அனுபல்லவி</strong>")

    input['lyrics'] = input['lyrics'].replace(
        "\n-", "\n").replace(
        "\n*", "\n")

    output = "---\ntitle: " + input['title'] + \
        "\nsidebar_position: " + str(inx) + \
        "\n---\n\n---\n<center>\n" + input['lyrics'] + '\n</center>'

    return output


# Write lyrics to corresponding folder

for idx, lyrics in enumerate(tamil_lyrics_new):

    # lyrics = tamil_lyrics_new[0]
    # print(lyrics)

    lyric = prep_md(lyrics, idx)

    write_path = "docs/" + letters[lyrics['index']] + \
        '/' + lyrics['slug'] + '.md'

    # write_path = os.path.join(os.path.abspath(os.curdir), write_path)

    with open(write_path, 'w+') as f:
        f.write(lyric)
