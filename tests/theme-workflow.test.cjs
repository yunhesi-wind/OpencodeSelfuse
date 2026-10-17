const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');

test('theme descriptions use independent projects without local project copies', () => {
  for (const directory of ['desktop-theme', 'cli-theme']) {
    assert.equal(fs.existsSync(path.join(root, directory)), false);
  }
  for (const name of ['opencode-desktop-ds-theme', 'opencode-cli-ds-theme']) {
    assert.ok(readme.includes('https://github.com/yunhesi-wind/' + name));
  }
  assert.ok(readme.includes('## 美化项目统一更新约定'));
  assert.ok(readme.includes('更新其中一个不要求修改另一个'));
  assert.ok(readme.includes('分别提交并推送'));
  assert.doesNotMatch(readme, /提交[／或]推送.*(?:另行明确|须另行)|完整同步 `(?:cli-theme|desktop-theme)/);
});

for (const directory of ['opencode桌面端ds美化', 'opencodeCli美化']) {
  const file = path.resolve(root, '..', directory, 'README.md');
  test(directory + ' documents the same update and push contract', { skip: !fs.existsSync(file) }, () => {
    const text = fs.readFileSync(file, 'utf8');
    assert.ok(text.includes('分别提交并推送'));
    assert.ok(text.includes('https://github.com/yunhesi-wind/OpencodeSelfuse'));
    assert.ok(text.includes('不要求另一个主题同时升级'));
    assert.doesNotMatch(text, /提交[／或]推送.*(?:另行明确|须另行)|本轮只要求更新本地/);
  });
}
