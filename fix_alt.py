import re
with open('E:/Github/portfolio_site/src/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Замените HTML в alt атрибутах на чистый текст
new_content = re.sub(r'<div\s+dir=[\x27"]*\s*auto[\x27"]*>(.*?)</div>', r'\1', content, flags=re.DOTALL)

with open('E:/Github/portfolio_site/src/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done")
