You are my automation agent. Complete an end-to-end setup for repo `one-ui-kit-galaxy`. If blocked, ask once; otherwise proceed. Be idempotent.

VARS
- USER = <USER>
- REPO = one-ui-kit-galaxy
- DESC = "Galaxy One UI (8/8.5/9) — UI kit, design tokens, components, layouts, semantic themes."
- REMOTE = git@github.com:<USER>/one-ui-kit-galaxy.git
- PAGES_URL = https://<USER>.github.io/one-ui-kit-galaxy/

TASKS
1) Create public GitHub repo REPO (MIT) with README and DESC. If GH CLI: `gh repo create REPO --public --license mit --add-readme -d "$DESC"`.
2) Scaffold folders:
   tokens/ components/{buttons,inputs,navigation,surfaces,system} layouts/{templates,examples}
   assets/{icons,previews,device-frames} source-files/ docs/{guidelines.md,accessibility.md,contribution.md}
   .github/workflows/
3) Write tokens JSON files:

# tokens/tokens.global.json
{
  "$schema": "https://tokens.styledictionary.com/v1",
  "color": { "palette": {
    "blue": { "500": {"value":"#4D94FF","type":"color"}, "600":{"value":"#1C74FF","type":"color"}, "700":{"value":"#155AD0","type":"color"} },
    "green": { "500": {"value":"#10B981","type":"color"}, "600":{"value":"#0EA371","type":"color"} },
    "gray": { "0":{"value":"#FFFFFF","type":"color"}, "50":{"value":"#FAFBFC","type":"color"}, "100":{"value":"#F6F7F9","type":"color"}, "900":{"value":"#0B1220","type":"color"} },
    "ink": { "black":{"value":"#000000","type":"color"}, "white":{"value":"#FFFFFF","type":"color"} }
  }},
  "radius": { "xs":{"value":8,"type":"dimension"}, "sm":{"value":12,"type":"dimension"}, "md":{"value":16,"type":"dimension"}, "lg":{"value":24,"type":"dimension"} },
  "space": { "1":{"value":4,"type":"dimension"}, "2":{"value":8}, "3":{"value":12}, "4":{"value":16}, "5":{"value":20}, "6":{"value":24}, "8":{"value":32} },
  "typography": {
    "family": { "sans": { "value": "SamsungOne, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'", "type":"fontFamily" } },
    "weight": { "regular":{"value":400,"type":"fontWeight"}, "medium":{"value":500}, "semibold":{"value":600}, "bold":{"value":700} },
    "size": { "caption":{"value":12}, "body":{"value":16}, "title":{"value":20}, "headline":{"value":24}, "display":{"value":32}, "giant":{"value":40} },
    "lineHeight": { "tight":{"value":1.2,"type":"number"}, "normal":{"value":1.4}, "relaxed":{"value":1.6} }
  },
  "elevation": {
    "0": {"value":[{"x":0,"y":0,"blur":0,"spread":0,"color":"rgba(0,0,0,0.00)"}], "type":"shadow"},
    "1": {"value":[{"x":0,"y":2,"blur":8,"spread":0,"color":"rgba(0,0,0,0.06)"}], "type":"shadow"},
    "2": {"value":[{"x":0,"y":6,"blur":16,"spread":0,"color":"rgba(0,0,0,0.08)"}], "type":"shadow"},
    "3": {"value":[{"x":0,"y":12,"blur":24,"spread":0,"color":"rgba(0,0,0,0.10)"}], "type":"shadow"}
  },
  "motion": {
    "duration": { "fast":{"value":120,"type":"duration"}, "base":{"value":200}, "slow":{"value":280} },
    "easing": { "standard":{"value":"cubic-bezier(0.2, 0, 0, 1)","type":"cubicBezier"},
                "decelerate":{"value":"cubic-bezier(0, 0, 0.2, 1)"},
                "accelerate":{"value":"cubic-bezier(0.3, 0, 1, 1)"} }
  },
  "state": { "hoverOpacity":{"value":0.06,"type":"number"}, "pressedOpacity":{"value":0.12},
             "focusRing": { "width":{"value":2}, "color":{"value":"{color.palette.blue.600}","type":"color"} } }
}

# tokens/tokens.light.json
{
  "$schema": "https://tokens.styledictionary.com/v1",
  "color": {
    "bg": { "value":"{color.palette.gray.0}","type":"color" },
    "surface": { "value":"{color.palette.gray.0}","type":"color" },
    "surface2": { "value":"{color.palette.gray.100}","type":"color" },
    "text": { "value":"{color.palette.gray.900}","type":"color" },
    "textSecondary": { "value":"#4A5568","type":"color" },
    "primary": { "value":"{color.palette.blue.600}","type":"color" },
    "primaryVariant": { "value":"{color.palette.blue.700}","type":"color" },
    "accent": { "value":"{color.palette.green.500}","type":"color" },
    "outline": { "value":"#D6D8DD","type":"color" },
    "onPrimary": { "value":"{color.palette.ink.white}","type":"color" },
    "onSurface": { "value":"{color.palette.gray.900}","type":"color" },
    "scrim": { "value":"rgba(0,0,0,0.38)","type":"color" }
  },
  "alias": {
    "button": { "height":{"value":48}, "radius":{"value":"{radius.md}"}, "paddingX":{"value":20} },
    "chip": { "height":{"value":32}, "radius":{"value":"{radius.lg}"} }
  }
}

# tokens/tokens.dark.json
{
  "$schema": "https://tokens.styledictionary.com/v1",
  "color": {
    "bg": { "value":"#0B0B0B","type":"color" },
    "surface": { "value":"#111316","type":"color" },
    "surface2": { "value":"#1A1D22","type":"color" },
    "text": { "value":"#E5E7EB","type":"color" },
    "textSecondary": { "value":"#9AA5B1","type":"color" },
    "primary": { "value":"#69A9FF","type":"color" },
    "primaryVariant": { "value":"{color.palette.blue.600}","type":"color" },
    "accent": { "value":"#34D399","type":"color" },
    "outline": { "value":"#2B3036","type":"color" },
    "onPrimary": { "value":"{color.palette.ink.black}","type":"color" },
    "onSurface": { "value":"#E5E7EB","type":"color" },
    "scrim": { "value":"rgba(0,0,0,0.60)","type":"color" }
  },
  "alias": {
    "button": { "height":{"value":48}, "radius":{"value":"{radius.md}"}, "paddingX":{"value":20} },
    "chip": { "height":{"value":32}, "radius":{"value":"{radius.lg}"} }
  }
}

4) Create workflow to build tokens and publish demo page:

# .github/workflows/tokens-pages.yml
name: Build Tokens & Publish Demo
on:
  push: { branches: [ main ] }
  workflow_dispatch: {}
permissions: { contents: read, pages: write, id-token: write }
concurrency: { group: pages, cancel-in-progress: false }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - name: Install Style Dictionary
        run: npm i -D style-dictionary
      - name: Build light tokens
        run: |
          cat > sd.light.json <<'CFG'
          { "source": ["tokens/tokens.global.json","tokens/tokens.light.json"],
            "platforms": { "css": { "transformGroup": "css", "buildPath": "build/css/",
              "files": [{ "destination": "tokens.light.css","format":"css/variables","options":{"showFileHeader":false}}]}}}
          CFG
          npx style-dictionary build --config sd.light.json
      - name: Build dark tokens
        run: |
          cat > sd.dark.json <<'CFG'
          { "source": ["tokens/tokens.global.json","tokens/tokens.dark.json"],
            "platforms": { "css": { "transformGroup": "css", "buildPath": "build/css/",
              "files": [{ "destination": "tokens.dark.css","format":"css/variables","options":{"showFileHeader":false}}]}}}
          CFG
          npx style-dictionary build --config sd.dark.json
      - name: Build demo site
        run: |
          mkdir -p site
          cp build/css/tokens.light.css site/
          cp build/css/tokens.dark.css site/
          cat > site/index.html <<'HTML'
          <!doctype html><html lang="en"><head>
            <meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
            <title>One UI Tokens Demo</title>
            <link id="light" rel="stylesheet" href="tokens.light.css">
            <link id="dark" rel="stylesheet" href="tokens.dark.css" disabled>
            <style>
              :root{--pad:24px}
              body{font-family:system-ui,Segoe UI,Inter,sans-serif;margin:0;padding:var(--pad);background:var(--ui-surface,#fff);color:var(--ui-text,#111)}
              h1{margin:0 0 12px} .swatch{display:flex;gap:12px;flex-wrap:wrap;margin:16px 0}
              .chip{width:112px;height:72px;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.06);display:flex;align-items:center;justify-content:center;border:1px solid var(--outline,#ddd)}
              button{height:48px;padding:0 20px;border-radius:16px;border:0;background:var(--primary,#1c74ff);color:var(--onPrimary,#fff);cursor:pointer}
            </style></head><body>
            <h1>Galaxy One UI Tokens Demo</h1>
            <p><button id="toggle">Toggle Theme</button></p>
            <h2>Colors</h2>
            <div class="swatch">
              <div class="chip" style="background:var(--surface);color:var(--onSurface)">surface</div>
              <div class="chip" style="background:var(--primary);color:var(--onPrimary)">primary</div>
              <div class="chip" style="background:var(--accent);color:#000">accent</div>
            </div>
            <h2>Button</h2><p><button>Primary Action</button></p>
            <script>
              const l=document.getElementById('light'), d=document.getElementById('dark');
              document.getElementById('toggle').onclick=()=>{const goDark=d.disabled; d.disabled=!goDark; l.disabled=goDark;};
            </script></body></html>
          HTML
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: site }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: ${{ steps.deployment.outputs.page_url }} }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4

5) Update README.md (create or replace) with:
- Title, overview, quick links, folder tree, usage (Figma + tokens CSS), license.
- Add badges under the title:
  [![Pages](https://img.shields.io/badge/Pages-Live-2ea44f?logo=github&logoColor=white)](PAGES_URL)
  [![Deploy](https://github.com/USER/REPO/actions/workflows/tokens-pages.yml/badge.svg)](https://github.com/USER/REPO/actions/workflows/tokens-pages.yml)
Replace USER and REPO.

6) Git:
- If local: `git init && git branch -M main && git remote add origin REMOTE`
- `git add . && git commit -m "chore: scaffold One UI kit, tokens, pages demo, CI"`
- `git push -u origin main`

OUTPUT
- Print:
  - Repo URL: https://github.com/USER/REPO
  - Pages URL: PAGES_URL
  - Workflow URL: https://github.com/USER/REPO/actions/workflows/tokens-pages.yml
  - Created files (tree)
  - Next steps: upload `source-files/one-ui-kit.fig`, add previews, extend components.
``
