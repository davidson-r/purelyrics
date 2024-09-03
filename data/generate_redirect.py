import json
import os


with open("data/pj_new.json") as f:
    tamil_lyrics = json.loads(f.read())

with open("data/english_new.json") as f:
    english_lyrics = json.loads(f.read())


redirects = []

for lyrics in tamil_lyrics:
    redirects.append({
        "from": f"/lyrics/tamil/{lyrics['songNo']}.html",
        "to": f"/tamil/{lyrics['index']}/{lyrics['slug']}"})


for lyrics in english_lyrics:
    if lyrics['title'].count(' ') > 0:
        redirects.append({
            "from": f"/lyrics/{lyrics['slug']}.html",
            "to": f"/english/{lyrics['letter'].capitalize()}/{lyrics['slug']}"})



with open('data/redirects.json', 'w') as f:
    json.dump(redirects, f, indent=4, ensure_ascii=False)
